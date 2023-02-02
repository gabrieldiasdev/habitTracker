import clsx from "clsx";

interface ProgressBarProps {
    progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div
                role='progressbar'
                aria-label='Progresso de hábitos completados nesse dia'
                aria-valuenow={progress}
                className={clsx('h-3 rounded-xl transition-all', {
                    'bg-violet-900': progress > 0 && progress < 20,
                    'bg-violet-800': progress >= 20 && progress < 40,
                    'bg-violet-700': progress >= 40 && progress < 60,
                    'bg-violet-600': progress >= 60 && progress < 80,
                    'bg-violet-500': progress >= 80,
                })}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};