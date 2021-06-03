import axios from "axios";

export async function translate(
  text: string,
  config: { from?: string; to?: string } = {}
): Promise<string | null> {
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

  const resp = await axios.post(url, params);
  const data = resp.data;
  const arr = (data || "").match(
    /<span id="tw-answ-target-text">(.*?)<\/span>/
  );

  if ((arr || []).length > 1) {
    return arr[1].trim();
  }
  return null;
}
