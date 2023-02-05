import mailchannelsPlugin from "./plugin";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Sergey K", email: "svyatogor@me.com" }],
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