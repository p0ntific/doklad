import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IQuizQuestion {
    question: string;
    answers: string[];
    correctIndex: number;
    color: string;
    explanation: string;
}

export const BrowserLimitsSection = memo(() => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    const questions: IQuizQuestion[] = [
        {
            question:
                "Может ли браузер напрямую читать файлы на диске пользователя?",
            answers: [
                "Да, любые файлы",
                "Нет, только через File API с разрешением",
                "Да, но только .txt",
                "Только в режиме разработчика",
            ],
            correctIndex: 1,
            color: "bg-blue-500",
            explanation:
                "Браузер требует явного разрешения пользователя через File API для безопасности",
        },
        {
            question:
                "Можно ли выполнить SQL запрос к базе данных напрямую из JavaScript в браузере?",
            answers: [
                "Да, через fetch()",
                "Нет, нужен backend",
                "Да, через WebSQL",
                "Только к SQLite",
            ],
            correctIndex: 1,
            color: "bg-purple-500",
            explanation:
                "Прямые SQL запросы к БД возможны только через backend для безопасности",
        },
        {
            question: "Сколько данных можно сохранить в LocalStorage?",
            answers: ["Неограниченно", "5-10 MB", "100 MB", "1 GB"],
            correctIndex: 1,
            color: "bg-green-500",
            explanation:
                "LocalStorage ограничен 5-10MB в зависимости от браузера",
        },
        {
            question:
                "Можно ли полностью скрыть секретные ключи в коде фронтенда?",
            answers: [
                "Да, через обфускацию",
                "Нет, весь код доступен через DevTools",
                "Да, в production режиме",
                "Только в приватных переменных",
            ],
            correctIndex: 1,
            color: "bg-orange-500",
            explanation:
                "Весь JavaScript код доступен через DevTools (F12), секреты должны быть на backend",
        },
    ];

    const handleAnswerClick = (index: number) => {
        if (showResult) return;
        setSelectedAnswer(index);
        setShowResult(true);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
    };

    const current = questions[currentQuestion];
    const isCorrect = selectedAnswer === current.correctIndex;
    const isFinished = currentQuestion === questions.length - 1 && showResult;

    return (
        <section className="h-screen relative bg-white snap-start overflow-hidden flex items-center">
            <div className="absolute inset-0 flex">
                <motion.div
                    className={`w-1/2 ${current.color} relative`}
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-0 flex items-center justify-center p-8"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                        }}
                    >
                        <div className="text-white">
                            <div className="text-sm font-bold tracking-wider mb-4 opacity-80">
                                ВОПРОС {currentQuestion + 1} /{" "}
                                {questions.length}
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                                Квиз
                                <br />
                                Браузер
                            </h2>
                        </div>
                    </div>
                </motion.div>

                <div className="w-1/2 bg-white flex items-center justify-center p-8">
                    <div className="max-w-xl w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
                                    {current.question}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    {current.answers.map((answer, index) => {
                                        const isSelected =
                                            selectedAnswer === index;
                                        const isCorrectAnswer =
                                            index === current.correctIndex;

                                        let bgColor =
                                            "bg-gray-100 hover:bg-gray-200";
                                        if (showResult && isSelected) {
                                            bgColor = isCorrect
                                                ? "bg-green-500 text-white"
                                                : "bg-red-500 text-white";
                                        } else if (
                                            showResult &&
                                            isCorrectAnswer
                                        ) {
                                            bgColor =
                                                "bg-green-100 border-green-500";
                                        }

                                        return (
                                            <motion.button
                                                key={index}
                                                onClick={() =>
                                                    handleAnswerClick(index)
                                                }
                                                disabled={showResult}
                                                className={`w-full p-4 text-left border-2 border-transparent transition-all ${bgColor} ${
                                                    showResult
                                                        ? "cursor-default"
                                                        : "cursor-pointer"
                                                }`}
                                                whileHover={
                                                    !showResult
                                                        ? { scale: 1.02 }
                                                        : {}
                                                }
                                                whileTap={
                                                    !showResult
                                                        ? { scale: 0.98 }
                                                        : {}
                                                }
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-lg">
                                                        {String.fromCharCode(
                                                            65 + index
                                                        )}
                                                    </span>
                                                    <span>{answer}</span>
                                                </div>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {showResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-6 rounded-lg mb-6 ${
                                            isCorrect
                                                ? "bg-green-50 border-2 border-green-300"
                                                : "bg-orange-50 border-2 border-orange-300"
                                        }`}
                                    >
                                        <p className="font-bold mb-2 text-lg">
                                            {isCorrect
                                                ? "✓ Правильно!"
                                                : "✗ Неправильно"}
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            {current.explanation}
                                        </p>
                                    </motion.div>
                                )}

                                {showResult && !isFinished && (
                                    <button
                                        onClick={handleNext}
                                        className="w-full py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
                                    >
                                        Следующий вопрос
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                )}

                                {isFinished && (
                                    <button
                                        onClick={handleRestart}
                                        className="w-full py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors"
                                    >
                                        Начать заново
                                    </button>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
});
