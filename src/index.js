import React from 'react';
import ReactDOM from 'react-dom';
import {
	FlexBox,
	Heading,
	SpectacleLogo,
	UnorderedList,
	CodeSpan,
	OrderedList,
	ListItem,
	FullScreen,
	Progress,
	Appear,
	Slide,
	Deck,
	Text,
	Grid,
	Box,
	Image,
	CodePane,
	MarkdownSlide,
	MarkdownSlideSet,
	Notes
} from 'spectacle';

const formidableLogo =

"meme.png";

// SPECTACLE_CLI_THEME_START
const theme = {
	fonts: {
		header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
		text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
	}
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
	<FlexBox
		justifyContent="space-between"
		position="absolute"
		bottom={0}
		width={1}
	>
		<Box padding="0 1em">
			<FullScreen />
		</Box>
		<Box padding="1em">
			<Progress />
		</Box>
	</FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
	<>
		<Slide>
			<Text>This is a slide fragment.</Text>
		</Slide>
		<Slide>
			<Text>This is also a slide fragment.</Text>
			<Appear>
				<Text>This item shows up!</Text>
			</Appear>
			<Appear>
				<Text>This item also shows up!</Text>
			</Appear>
		</Slide>
	</>
);

const Presentation = () => (
	<Deck theme={theme} template={template}>
		<Slide>
			<FlexBox height="100%">
				{/* <SpectacleLogo size={500} /> */}
				<Heading margin="0px" fontSize="150px">
					✨<i>ReactJS</i> ✨
				</Heading>
			</FlexBox>
			{/* <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes> */}
		</Slide>
		<Slide
			transition={{
				from: {
					transform: 'scale(0.5) rotate(45deg)',
					opacity: 0
				},
				enter: {
					transform: 'scale(1) rotate(0)',
					opacity: 1
				},
				leave: {
					transform: 'scale(0.2) rotate(315deg)',
					opacity: 0
				}
			}}
			backgroundColor="tertiary"
			backgroundOpacity={0.5}
		>
			<Heading>Table of contents</Heading>
			<UnorderedList>
				<ListItem>
					<CodeSpan>React</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>Fundamentals</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>Setup</CodeSpan>
				</ListItem>
				<ListItem>
					<CodeSpan>Conclusion</CodeSpan>
				</ListItem>
			</UnorderedList>
		</Slide>
		<Slide>
			<Heading>React</Heading>
			<Text>React is JavaScript library for creating user interface.</Text>
			<Text>Why? </Text>
			<Text>Maintainable, manageable and reusable code. </Text>
			<OrderedList>
				<Appear>
					<ListItem>UI state becomes easier to handle</ListItem>
				</Appear>
				<Appear>
					<ListItem>Focus on business logic</ListItem>
				</Appear>
				<Appear priority={0}>
					<ListItem>
						Big community
					</ListItem>
				</Appear>
			</OrderedList>
		</Slide>
		<Slide>
			<Heading>React</Heading>
			<Text>How? </Text>
			<OrderedList>
				<Appear>
					<ListItem>Splitting into components.</ListItem>
				</Appear>
			</OrderedList>
		</Slide>
		{/* <Slide>
				<FlexBox paddingTop={0} flex={1}>
					<Image src={formidableLogo} width={100} />
				</FlexBox>
		</Slide> */}
		{/* <Slide>
			<FlexBox>
				<Text>These</Text>
				<Text>Text</Text>
				<Text color="secondary">Items</Text>
				<Text fontWeight="bold">Flex</Text>
			</FlexBox>
			<Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
				<Box backgroundColor="primary">
					<Text color="secondary">Single-size Grid Item</Text>
				</Box>
				<Box backgroundColor="secondary">
					<Text>Double-size Grid Item</Text>
				</Box>
			</Grid>
			<Grid
				gridTemplateColumns="1fr 1fr 1fr"
				gridTemplateRows="1fr 1fr 1fr"
				gridRowGap={1}
			>
				{Array(9)
					.fill('')
					.map((_, index) => (
						<FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
							<Image src={formidableLogo} width={100} />
						</FlexBox>
					))}
			</Grid>
		</Slide> */}
		{/* <SlideFragments />
		<Slide>
			<CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';
        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
			<Box height={20} />
			<CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
		</Slide>
		<div>
			<Slide>
				<Heading>This is a slide embedded in a div</Heading>
			</Slide>
		</div>
		<MarkdownSlide componentProps={{ color: 'yellow' }}>
			{`
        # This is a Markdown Slide
        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
		</MarkdownSlide>
		<MarkdownSlide animateListItems>
			{`
       # This is also a Markdown Slide
       It uses the \`animateListItems\` prop.
       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
		</MarkdownSlide>
		<Slide>
			<Grid
				gridTemplateColumns="50% 50%"
				gridTemplateRows="50% 50%"
				height="100%"
			>
				<FlexBox alignItems="center" justifyContent="center">
					<Heading>This is a 4x4 Grid</Heading>
				</FlexBox>
				<FlexBox alignItems="center" justifyContent="center">
					<Text textAlign="center">
						With all the content aligned and justified center.
					</Text>
				</FlexBox>
				<FlexBox alignItems="center" justifyContent="center">
					<Text textAlign="center">
						It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
						<CodeSpan>{'<FlexBox />'}</CodeSpan> components.
					</Text>
				</FlexBox>
				<FlexBox alignItems="center" justifyContent="center">
					<Box width={200} height={200} backgroundColor="secondary" />
				</FlexBox>
			</Grid>
		</Slide>
		<MarkdownSlideSet>
			{`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
		</MarkdownSlideSet> */}
	</Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));