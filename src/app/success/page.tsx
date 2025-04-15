// app/success/page.tsx

import { paymentVerify } from "@/services/RequestService";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const order_id = Array.isArray(resolvedSearchParams.order_id)
    ? resolvedSearchParams.order_id[0]
    : resolvedSearchParams.order_id;

  if (!order_id) {
    redirect("/error");
  }

  try {
    const response = await paymentVerify(order_id);
    const data = response?.data;

    return (
      <div>
        <h1>✅ Payment Verification Success</h1>
        <p><strong>Order ID:</strong> {order_id}</p>
        {data && (
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    );
  } catch (error) {
    console.error("Payment verification error:", error);
    return (
      <div>
        <h1>❌ Payment Verification Failed</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}
