import axios from "axios";

interface Result {
  targetText?: string;
  romanization?: string;
}

export async function translate(
  text: string,
  config: { from?: string; to?: string } = {}
): Promise<Result> {
  const from = config.from || "auto";
  const to = config.to || "id";
  const params = new URLSearchParams();
  params.append(
    "async",
    `translate,sl:${from},tl:${to},st:${encodeURIComponent(
      text
    )},id:1622684736837,qc:true,ac:false,_id:tw-async-translate,_pms:s,_fmt:pc`
  );
  const url =
    "https://www.google.com/async/translate?vet=12ahUKEwjNmoPlqvrwAhXSbn0KHbMrCZIQqDgwAHoECAIQJg..i&ei=SjO4YM3NE9Ld9QOz16SQCQ&yv=3";

  const resp = await axios.post(url, params, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
    },
  });
  const data = resp.data;
  const result: Result = {
    targetText: undefined,
    romanization: undefined,
  };

  const targetText = getTextBetween(
    data,
    '<span id="tw-answ-target-text">',
    "</span>"
  );
  const romanization = getTextBetween(
    data,
    '<span id="tw-answ-romanization">',
    "</span>"
  );
  if (targetText) result.targetText = targetText;
  if (romanization) result.romanization = romanization;
  return result;
}

function getTextBetween(text: string, a: string, b: string): string | null {
  const arr = (text || "").match(`${a}(.*?)${b}`);
  if (arr && arr.length > 1) {
    return arr[1];
  }
  return null;
}

// translate("selamat siang", { to: "zh-CN" }).then(console.log);
