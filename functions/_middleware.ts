import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Test", email: "svyatogor@gmail.com" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@peakexclusive.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});