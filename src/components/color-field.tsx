import CopyButton from "./copy-button";

type ColorFieldProps = {
    id: string;
    label: string;
    descripcion: string
}

export default function ColorField({ id, label, descripcion } : ColorFieldProps) {

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
                <label
                    htmlFor={id}
                    className="text-sm font-medium font-geist text-foreground"
                >
                    {label}
                </label>
                <p className="text-sm font-normal font-geist text-muted-foreground">{descripcion}</p>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <input
                        type="color"
                        aria-label={label}
                        className="w-12 h-12 appearance-none rounded-2xl p-0 border-0 cursor-pointer bg-transparent"
                    />
                </div>
                <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center font-geist text-muted-foreground">
                        #
                    </span>
                    <input
                        id={id}
                        type="text"
                        className="border border-gray-300 py-3 pl-7 pr-10 rounded-xl outline-gray-400 uppercase font-geist
                            w-full"
                    />
                    <CopyButton />
                </div>
            </div>
        </div>
    )

}
