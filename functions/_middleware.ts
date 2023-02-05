import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Nikolay", email: "nikolay@exa.com.cy" }],
    },
  ],
  from: { name: "Enquiry", email: "site@peakexclusive.com" },
  subject: "New enquiry from Peak Exclusive",
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thankyou" },
    }),
});