import axios from "axios";

interface Result {
  targetText?: string;
  romanization?: string;
}

export async function translate(
  text: string,
  config: { from?: string; to?: string } = {}
): Promise<Result> {
  try {
    const from = config.from || "auto";
    const to = config.to || "id";
    const params = new URLSearchParams();
    params.append(
      "async",
      `translate,sl:${from},tl:${to},st:${encodeURIComponent(
        text
      )},id:1622684736837,qc:true,ac:false,_id:tw-async-translate,_pms:s,_fmt:pc`
    );
    const url = "https://www.google.com/async/translate";

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
  } catch (error) {
    let errMessage = error.message;
    if (error.response && error.response.data) {
      errMessage = error.response.data;
    }
    throw new Error(errMessage);
  }
}

function getTextBetween(text: string, a: string, b: string): string | null {
  const arr = (text || "").split(a);
  if (arr && arr.length > 1) {
    const arr2 = arr[1].split(b);
    return arr2[0];
  }
  return null;
}

translate("Selamat Siang", { to: "ko" }).then(console.log);
