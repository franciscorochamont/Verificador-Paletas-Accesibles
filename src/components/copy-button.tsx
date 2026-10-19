import { Copy } from "lucide-react";

export default function CopyButton() {

    return(
        <button
            type="button"
            aria-label="Copiar código de color"
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
        >
            <Copy aria-hidden="true" className="size-4" />
        </button>
    )

}
