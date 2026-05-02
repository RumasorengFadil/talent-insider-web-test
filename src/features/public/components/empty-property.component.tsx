import JobEmpty from "@/components/job-empty.component"
import { Button } from "@/components/ui/button"

type EmptyStateProps = {
    keyword?: string
    onAction?: () => void
    actionLabel?: string
}

export default function EmptyProperty({
    keyword,
    onAction,
    actionLabel = "See other jobs",
}: EmptyStateProps) {
    return (
        <div className="flex justify-center items-center pb-32 h-full">
            <div className="flex items-center justify-center flex-col max-w-72 gap-6">

                <JobEmpty />

                <p className="text-xs text-center leading-relaxed">
                    Sorry, there’s no result related to{" "}
                    <span className="font-semibold">
                        “{keyword ?? "your search"}”
                    </span>
                    . We’ll keep updating and take notes of your interest.
                </p>

                <Button
                    onClick={onAction}
                    className="bg-primary cursor-pointer
          bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_60%),radial-gradient(circle_at_86%_87%,rgba(0,0,0,0.23)_0%,rgba(0,0,0,0)_80%)]
          shadow-inner text-white p-5 rounded-sm font-semibold hover:bg-primary/90 transition"
                >
                    {actionLabel}
                </Button>
            </div>
        </div>
    )
}