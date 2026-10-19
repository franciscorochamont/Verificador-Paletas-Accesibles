import { ArrowUpDown, Plus } from "lucide-react";
import ColorField from "./color-field";
import PreviewPanel from "./preview-panel";

export default function ContrastChecker() {

    return(
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:mt-8">
            <div className="w-full flex flex-col gap-3 bg-white border border-border
            p-5 rounded-2xl">
                <aside className="flex flex-col gap-6">
                    <ColorField
                        id="colorfield"
                        label="Color de texto"
                        descripcion="El color del contenido"
                    />
                    <div className="flex items-center gap-3">
                        <span className="h-px flex-1 bg-border" aria-hidden="true" />
                            <button className="inline-flex h-8 items-center gap-1.5
                                rounded-full border border-border px-3 text-xs font-medium
                                text-muted-foreground transition-colors hover:bg-muted
                                hover:text-foreground focus-visible:outline-2
                                focus-visible:outline-ring"
                            >
                                <ArrowUpDown className="size-3.5" aria-hidden="true" />
                                Intercambiar
                            </button>
                        <span className="h-px flex-1 bg-border" aria-hidden="true" />
                    </div>
                    <ColorField
                        id="background"
                        label="Color de fondo"
                        descripcion="La superficie detrás del texto"
                    />
                </aside>
                <button className="flex items-center justify-center gap-2 bg-black text-white
                    p-3 font-geist rounded-xl">
                   <Plus />
                   Guardar Paleta
                </button>
            </div>
            <PreviewPanel />
        </div>
    )

}
