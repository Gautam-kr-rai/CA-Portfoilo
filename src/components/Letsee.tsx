"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `your trusted partner in financial clarity, compliance, and growth. We specialize in Direct & Indirect Taxation, GST, and ROC Compliances, offering personalized, professional solutions  
    tailored to your needs. Let’s simplify your financial journey together.
`;

 function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

export default TextGenerateEffectDemo;