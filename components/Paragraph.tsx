const Paragraph = ({text}: any) => (
  <>
    { 
      text.split('\n').map((paragraph: string, key: number) => <p key={key}>{paragraph}</p>)
    }
  </>
)

export default Paragraph;