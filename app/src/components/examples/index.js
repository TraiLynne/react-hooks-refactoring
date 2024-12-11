import SimpleFormClass from "./00_SimpleForm/class";
import { beforeCode00, refactoredCode00 } from "./00_SimpleForm/code";
import SimpleForm from "./00_SimpleForm/functional";
import LifecycleClassComponent from "./01_LifecycleMethods/class";
import { beforeCode01, refactoredCode01 } from "./01_LifecycleMethods/code";
import LifecycleComponent from "./01_LifecycleMethods/functional";
import ThemeClassComponent from "./02_ContextAPI/class";
import { beforeCode02, refactoredCode02 } from "./02_ContextAPI/code";
import ThemeComponent from "./02_ContextAPI/functional";
import CounterClassComponent from "./03_StateAndMethods/class";
import { beforeCode03, refactoredCode03 } from "./03_StateAndMethods/code";
import CounterComponent from "./03_StateAndMethods/functional";
import ParentClassComponent from "./04_Prop-Drilling/class";
import { beforeCode04, refactoredCode04 } from "./04_Prop-Drilling/code";
import ParentComponent from "./04_Prop-Drilling/functional";
import ToggleClassComponent from "./05_ConditionalRendering/class";
import { beforeCode05, refactoredCode05 } from "./05_ConditionalRendering/code";
import ToggleComponent from "./05_ConditionalRendering/functional";
import DataFetcherClass from "./06_DataFetching/class";
import { beforeCode06, refactoredCode06 } from "./06_DataFetching/code";
import DataFetcher from "./06_DataFetching/functional";
import AnimationClassComponent from "./07_AnimationLogic/class";
import { beforeCode07, refactoredCode07 } from "./07_AnimationLogic/code";
import AnimationComponent from "./07_AnimationLogic/functional";
import TimerClassComponent from "./08_CustomHookEquivalent/class";
import { beforeCode08, refactoredCode08 } from "./08_CustomHookEquivalent/code";
import TimerComponent from "./08_CustomHookEquivalent/functional";
import ErrorBoundaryClass from "./09_ErrorBoundary/class";
import { beforeCode09, refactoredCode09 } from "./09_ErrorBoundary/code";
import ErrorBoundary from "./09_ErrorBoundary/functional";

export const examples = [
	{
		title: "Simple Form",
		before: {
			component: SimpleFormClass,
			code: beforeCode00,
		},
		refactored: {
			component: SimpleForm,
			code: refactoredCode00,
		},
	},
	{
		title: "Lifecycle Methods",
		before: {
			component: LifecycleClassComponent,
			code: beforeCode01,
		},
		refactored: {
			component: LifecycleComponent,
			code: refactoredCode01,
		},
	},
	{
		title: "State and Methods",
		before: {
			component: CounterClassComponent,
			code: beforeCode03,
		},
		refactored: {
			component: CounterComponent,
			code: refactoredCode03,
		},
	},
	{
		title: "Prop-Drilling",
		before: {
			component: ParentClassComponent,
			code: beforeCode04,
		},
		refactored: {
			component: ParentComponent,
			code: refactoredCode04,
		},
	},
	{
		title: "Conditional Rendering",
		before: {
			component: ToggleClassComponent,
			code: beforeCode05,
		},
		refactored: {
			component: ToggleComponent,
			code: refactoredCode05,
		},
	},
	{
		title: "Data Fetching",
		before: {
			component: DataFetcherClass,
			code: beforeCode06,
		},
		refactored: {
			component: DataFetcher,
			code: refactoredCode06,
		},
	},
	{
		title: "Animation Logic",
		before: {
			component: AnimationClassComponent,
			code: beforeCode07,
		},
		refactored: {
			component: AnimationComponent,
			code: refactoredCode07,
		},
	},
	{
		title: "Custom Hook Equivalent",
		before: {
			component: TimerClassComponent,
			code: beforeCode08,
		},
		refactored: {
			component: TimerComponent,
			code: refactoredCode08,
		},
	},
	{
		title: "Error Boundary",
		before: {
			component: ErrorBoundaryClass,
			code: beforeCode09,
		},
		refactored: {
			component: ErrorBoundary,
			code: refactoredCode09,
		},
	},
];
