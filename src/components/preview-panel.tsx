
export default function PreviewPanel() {

    return(
        <section className="flex flex-col divide-y divide-border rounded-2xl border
            border-border bg-card p-5"
        >
            <div className="flex items-center justify-between pb-4">
                <p className="font-geist text-sm uppercase text-primary">Vista previa</p>
                <p className="font-mono text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">#6B7280</span>
                    {" "}sobre{" "}
                    <span className="font-medium text-foreground">#F3F4F6</span>
                </p>
            </div>
            <div className="flex flex-col gap-1.5 py-4">
                <p className="font-geist text-sm uppercase text-muted-foreground">
                    Titular · 32px
                </p>
                <h2 className="font-semibold font-geist text-3xl">
                    El buen diseño es tan poco diseño como sea posible.
                </h2>
            </div>
            <div className="flex flex-col gap-1.5 py-4">
                <p className="font-geist text-sm uppercase text-muted-foreground">
                    Texto grande · 24px
                </p>
                <p className="font-geist font-medium text-2xl">
                    Cada persona merece leer sin esfuerzo.
                </p>
            </div>
            <div className="flex flex-col gap-1.5 py-4">
                <p className="font-geist text-sm uppercase text-muted-foreground">Cuerpo · 16px</p>
                <p>
                    Un contraste suficiente entre el texto y su fondo permite que el contenido sea
                    legible para personas con baja visión,
                    daltonismo o que leen bajo la luz del sol en una pantalla móvil.
                </p>
            </div>
            <div className="flex flex-col gap-1.5 py-4">
                <p className="font-geist text-sm uppercase text-muted-foreground">Pequeño · 14px</p>
                <p>Notas al pie, etiquetas de formulario y metadatos suelen ser los primeros en fallar.</p>
            </div>
            <div className="flex flex-col gap-3 pt-4">
                <p className="font-geist text-sm uppercase text-muted-foreground">
                    Botones · componentes
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <button type="button"
                        className="rounded-xl bg-primary px-4 py-2 font-geist text-sm
                            font-medium text-primary-foreground"
                    >
                        Botón primario
                    </button>
                    <button type="button"
                        className="rounded-xl border border-border bg-transparent px-4 py-2
                            font-geist text-sm font-medium text-foreground transition-colors
                            hover:bg-muted"
                    >
                        Botón secundario
                    </button>
                    <a href="#"
                        className="font-geist text-sm font-medium text-foreground underline
                            underline-offset-4"
                    >
                        Enlace de texto
                    </a>
                </div>
            </div>
        </section>
    )

}
