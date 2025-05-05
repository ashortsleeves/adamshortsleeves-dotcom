export default function Tabs({ children, buttons, ButtonsContainer, activeBtns }) {
    return (
    <>
        <ButtonsContainer className={activeBtns ? 'active-btns' : undefined}>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
    );
}