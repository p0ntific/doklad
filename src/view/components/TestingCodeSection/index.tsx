import { memo, useState, useEffect } from "react";
import { FadeIn } from "@/view/animations/FadeIn";
import { Play, Code, FileCode, Check, X, Circle, MousePointer2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const TestingCodeSection = memo(() => {
    const [activeTest, setActiveTest] = useState<"component" | "e2e">(
        "component"
    );
    const [showConsole, setShowConsole] = useState(false);
    const [consoleLines, setConsoleLines] = useState<
        Array<{ type: string; text: string }>
    >([]);
    const [showBrowserModal, setShowBrowserModal] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
    const [browserStep, setBrowserStep] = useState(0);

    const componentTestCode = `import { render, screen } from '@testing-library/react';
import { Button } from '@/components/Button';

describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    const button = screen.getByText('Click');
    button.click();
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`;

    const e2eTestCode = `describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    
    cy.get('[data-testid="email"]')
      .type('user@example.com');
      
    cy.get('[data-testid="password"]')
      .type('password123');
      
    cy.get('[data-testid="submit"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="welcome"]')
      .should('contain', 'Welcome back');
  });

  it('should show error on invalid credentials', () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('wrong@test.com');
    cy.get('[data-testid="password"]').type('wrong');
    cy.get('[data-testid="submit"]').click();
    
    cy.get('[data-testid="error"]')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});`;

    const consoleOutputData = {
        component: [
            {
                type: "pass",
                text: "✓ Button Component › should render correctly (123ms)",
            },
            {
                type: "pass",
                text: "✓ Button Component › should handle click events (45ms)",
            },
        ],
        e2e: [
            { type: "run", text: "› Login Flow › should login successfully" },
            {
                type: "pass",
                text: "✓ Login Flow › should login successfully (2.3s)",
            },
            {
                type: "pass",
                text: "✓ Login Flow › should show error on invalid credentials (1.8s)",
            },
        ],
    };

    useEffect(() => {
        setConsoleLines([]);
        setShowConsole(false);
    }, [activeTest]);

    const runTests = () => {
        setShowConsole(true);
        setConsoleLines([]);

        // Show browser modal only for E2E tests
        if (activeTest === "e2e") {
            setShowBrowserModal(true);
            setBrowserStep(0);
            simulateBrowserTest();
        }

        const output = consoleOutputData[activeTest];
        output.forEach((line, idx) => {
            setTimeout(() => {
                setConsoleLines((prev) => [...prev, line]);
            }, idx * 500);
        });

        setTimeout(
            () => {
                setConsoleLines((prev) => [
                    ...prev,
                    { type: "success", text: "All tests passed!" },
                ]);
                if (activeTest === "e2e") {
                    setTimeout(() => setShowBrowserModal(false), 1500);
                }
            },
            output.length * 500 + 300
        );
    };

    const simulateBrowserTest = () => {
        const steps = [
            { x: 50, y: 30, delay: 0 },      // Start position
            { x: 200, y: 180, delay: 800 },  // Move to email field
            { x: 200, y: 180, delay: 1300 }, // Click email
            { x: 200, y: 240, delay: 2300 }, // Move to password
            { x: 200, y: 240, delay: 2800 }, // Click password
            { x: 200, y: 320, delay: 3800 }, // Move to submit
            { x: 200, y: 320, delay: 4300 }, // Click submit
            { x: 150, y: 200, delay: 5300 }, // Move to center
        ];

        steps.forEach((step, idx) => {
            setTimeout(() => {
                setCursorPosition({ x: step.x, y: step.y });
                setBrowserStep(idx);
            }, step.delay);
        });
    };


    return (
        <section className="h-screen flex items-center py-8 relative bg-[#1e1e1e] text-white snap-start">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full h-[90vh]">
                    <FadeIn>
                        <div className="bg-[#2d2d30] border border-[#3e3e42] h-full flex flex-col">
                            <div className="bg-[#3c3c3c] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 bg-[#ff5f57]"></div>
                                        <div className="w-3 h-3 bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 bg-[#28c840]"></div>
                                    </div>
                                    <Code className="w-4 h-4 ml-4 text-gray-400" />
                                    <span className="text-sm text-gray-300">
                                        Visual Studio Code - Cypress Tests
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={runTests}
                                        className="text-xs px-3 py-1 bg-[#0e639c] hover:bg-[#1177bb] transition-colors flex items-center gap-2"
                                    >
                                        <Play className="w-3 h-3" />
                                        Run Tests
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-1 overflow-hidden">
                                <div className="w-48 bg-[#252526] border-r border-[#3e3e42] p-4">
                                    <div className="text-xs font-bold mb-3 text-gray-400">
                                        EXPLORER
                                    </div>
                                    <div className="space-y-1">
                                        <div
                                            onClick={() =>
                                                setActiveTest("component")
                                            }
                                            className={`flex items-center gap-2 px-2 py-1 text-sm cursor-pointer hover:bg-[#2a2d2e] transition-colors ${
                                                activeTest === "component"
                                                    ? "bg-[#37373d]"
                                                    : ""
                                            }`}
                                        >
                                            <FileCode className="w-4 h-4 text-blue-400" />
                                            <span>Button.test.tsx</span>
                                        </div>
                                        <div
                                            onClick={() => setActiveTest("e2e")}
                                            className={`flex items-center gap-2 px-2 py-1 text-sm cursor-pointer hover:bg-[#2a2d2e] transition-colors ${
                                                activeTest === "e2e"
                                                    ? "bg-[#37373d]"
                                                    : ""
                                            }`}
                                        >
                                            <FileCode className="w-4 h-4 text-green-400" />
                                            <span>login.cy.ts</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col overflow-hidden">
                                    <div className="flex-1 overflow-auto bg-[#1e1e1e]">
                                        <SyntaxHighlighter
                                            language="typescript"
                                            style={vscDarkPlus}
                                            showLineNumbers={true}
                                            customStyle={{
                                                margin: 0,
                                                padding: '1.5rem',
                                                background: '#1e1e1e',
                                                fontSize: '0.875rem',
                                            }}
                                            lineNumberStyle={{
                                                minWidth: '3em',
                                                paddingRight: '1em',
                                                color: '#858585',
                                                textAlign: 'right',
                                            }}
                                        >
                                            {activeTest === "component"
                                                ? componentTestCode
                                                : e2eTestCode}
                                        </SyntaxHighlighter>
                                    </div>

                                    {showConsole && (
                                        <div className="h-48 bg-[#181818] border-t border-[#3e3e42] overflow-auto">
                                            <div className="bg-[#252526] px-4 py-2 border-b border-[#3e3e42] text-xs font-bold">
                                                TERMINAL
                                            </div>
                                            <div className="p-4 font-mono text-xs space-y-1">
                                                {consoleLines.map(
                                                    (line, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`flex items-start gap-2 ${
                                                                line.type ===
                                                                "pass"
                                                                    ? "text-green-400"
                                                                    : line.type ===
                                                                        "fail"
                                                                      ? "text-red-400"
                                                                      : line.type ===
                                                                          "success"
                                                                        ? "text-green-400 font-bold"
                                                                        : "text-gray-400"
                                                            }`}
                                                        >
                                                            {line.type ===
                                                                "pass" && (
                                                                <Check className="w-3 h-3 mt-0.5" />
                                                            )}
                                                            {line.type ===
                                                                "fail" && (
                                                                <X className="w-3 h-3 mt-0.5" />
                                                            )}
                                                            {line.type ===
                                                                "run" && (
                                                                <Circle className="w-3 h-3 mt-0.5" />
                                                            )}
                                                            <span>
                                                                {line.text}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="bg-[#007acc] px-4 py-2 flex items-center justify-between text-sm">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-2">
                                        <Check className="w-4 h-4" />
                                        Tests: 12 passed
                                    </span>
                                    <span className="text-gray-200">
                                        Coverage: 94%
                                    </span>
                                </div>
                                <span className="text-xs text-gray-200">
                                    Cypress v13.6.0
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Browser Simulation Modal */}
            {showBrowserModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-2xl w-[600px] overflow-hidden">
                        {/* Browser Chrome */}
                        <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 mx-4">
                                localhost:3000/login
                            </div>
                        </div>

                        {/* Browser Content */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 h-[400px] overflow-hidden">
                            {/* Login Form */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-80">
                                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                                
                                <div className={`mb-4 transition-all ${browserStep >= 2 ? 'ring-2 ring-blue-500' : ''}`}>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <div className="border border-gray-300 rounded px-3 py-2 text-sm">
                                        {browserStep >= 3 ? 'user@example.com' : ''}
                                    </div>
                                </div>

                                <div className={`mb-6 transition-all ${browserStep >= 4 ? 'ring-2 ring-blue-500' : ''}`}>
                                    <label className="block text-sm font-medium mb-1">Password</label>
                                    <div className="border border-gray-300 rounded px-3 py-2 text-sm">
                                        {browserStep >= 5 ? '••••••••' : ''}
                                    </div>
                                </div>

                                <button
                                    className={`w-full py-2 rounded transition-all ${
                                        browserStep >= 6
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                                >
                                    {browserStep >= 7 ? 'Loading...' : 'Sign In'}
                                </button>
                            </div>

                            {/* Animated Cursor */}
                            <div
                                className="absolute pointer-events-none transition-all duration-500 ease-out"
                                style={{
                                    left: `${cursorPosition.x}px`,
                                    top: `${cursorPosition.y}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <MousePointer2
                                    className="w-6 h-6 text-blue-600 drop-shadow-lg"
                                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                                />
                                {[2, 4, 6].includes(browserStep) && (
                                    <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                                )}
                            </div>

                            {/* Success Message */}
                            {browserStep >= 7 && (
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2">
                                    <Check className="w-4 h-4" />
                                    <span className="text-sm">Test Passed!</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
});
