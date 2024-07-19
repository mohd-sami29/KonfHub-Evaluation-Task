import React, { useEffect, useState } from "react";
import useApi from "../Api/useApi";
import DOMPurify from "dompurify";

function About() {
  const { data, error } = useApi();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (data && data.description) {
      const htmlString = data.description;
      const sanitizedHtmlString = DOMPurify.sanitize(htmlString);
      setHtmlContent(sanitizedHtmlString);
    }
  }, [data]);

  if (error) {
    return (
      <div className="flex justify-center items-center p-4">
        <p className="text-red-500 text-2xl font-semibold p-4 rounded border border-slate-500">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}

export default About;
