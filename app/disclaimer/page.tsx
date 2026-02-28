import type { Metadata } from "next";
import DisclaimerClient from "./DisclaimerClient";

export const metadata: Metadata = {
  title: "Disclaimer | Doc2Deutsch",
  description:
    "Official disclaimer describing the limited scope of Doc2Deutsch as a medical German language training provider only."
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}