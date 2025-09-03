"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  const downloadResumeHandler = () => {
     window.open("/Hemang_FullStackDeveloper_Canada.pdf", "_blank")
  };

  return (
    <Button
      size={"lg"}
      className="group text-base px-5 py-6"
      onClick={downloadResumeHandler}
    >
      {" "}
      <Download className="mx-1 transition-transform group-hover:animate-bounce" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
