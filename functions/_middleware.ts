import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Test", email: "sergey@kuleshov.online" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@peakexclusive.com" },
  subject: "New enquiry from Peak Exclusive",
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});