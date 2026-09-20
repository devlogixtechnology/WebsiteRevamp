"use client";

import { useId, useState } from "react";
import { Upload, FileCheck2 } from "lucide-react";

export type FileUploadProps = {
  label: string;
  name: string;
  required?: boolean;
  accept?: string;
  error?: string;
  tone?: "light" | "dark";
};

// HANDOFF-AMBIGUOUS: no résumé/file-upload field existed anywhere in the job/internship
// export (see content-contact.md flag #4) despite this being a careers application form —
// added here since a working application form needs one.
export default function FileUpload({
  label,
  name,
  required,
  accept = ".pdf,.doc,.docx",
  error,
  tone = "light",
}: FileUploadProps) {
  const id = useId();
  const [fileName, setFileName] = useState<string | null>(null);
  const labelColor = tone === "dark" ? "text-slate-300" : "text-slate-700";
  const borderColor = tone === "dark" ? "border-white/20" : "border-slate-300";
  // text-slate-600, not the "Body Mid" slate-500 token — slate-500 on white measures 4.48:1
  // under axe, just under the 4.5:1 AA threshold; slate-600 clears it.
  const mutedColor = tone === "dark" ? "text-slate-400" : "text-slate-600";
  const filledColor = tone === "dark" ? "text-white" : "text-slate-900";

  return (
    <div>
      <label htmlFor={id} className={`text-sm font-medium ${labelColor}`}>
        {label}
        {required && (
          <span aria-hidden className="text-brand-teal-dark">
            {" "}
            *
          </span>
        )}
      </label>
      <label
        htmlFor={id}
        className={`mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed px-4 py-3 text-sm transition-colors duration-300 ${
          error ? "border-red-500" : `${borderColor} hover:border-brand-teal`
        }`}
      >
        {fileName ? (
          <FileCheck2 className="h-4 w-4 shrink-0 text-brand-teal-hover" aria-hidden />
        ) : (
          <Upload className={`h-4 w-4 shrink-0 ${mutedColor}`} aria-hidden />
        )}
        <span className={fileName ? filledColor : mutedColor}>
          {fileName ?? "Upload your resume (PDF or Word)"}
        </span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        required={required}
        aria-invalid={!!error}
        className="sr-only"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
      {error && (
        <p role="alert" className={`mt-1.5 text-xs ${tone === "dark" ? "text-red-400" : "text-red-600"}`}>
          {error}
        </p>
      )}
    </div>
  );
}
