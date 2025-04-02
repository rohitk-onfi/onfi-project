"use client";

import { useState } from "react";
import { servers, searchStrategies } from "../data";
import MaxDepthConfig from "./max-depth-config";
import SearchStrategiesSection from "./search-strategies";
import ToolUseConfig from "./tool-use-config";
import FeedbackTraces from "./feedback-traces";

interface AISettingsProps {}

const AISettings:React.FC<AISettingsProps> = ({}) => {
    const [maxDepth, setMaxDepth] = useState(5);
    const [feedbackEnabled, setFeedbackEnabled] = useState(true);
    const [logTraces, setLogTraces] = useState(true);
    const [chatTraces, setChatTraces] = useState(false);

    return (
        <div className="space-y-6">
            {/* Max Depth Configuration */}
            <MaxDepthConfig maxDepth={maxDepth} setMaxDepth={setMaxDepth} />

            {/* Server Configuration */}
            <ToolUseConfig servers={servers} />

            {/* Search Strategies */}
            <SearchStrategiesSection searchStrategies={searchStrategies} />

            {/* Feedback and Traces */}
            <FeedbackTraces
                feedbackEnabled={feedbackEnabled}
                setFeedbackEnabled={setFeedbackEnabled}
                logTraces={logTraces}
                setLogTraces={setLogTraces}
                chatTraces={chatTraces}
                setChatTraces={setChatTraces}
            />
        </div>
    );
}

export default AISettings;
