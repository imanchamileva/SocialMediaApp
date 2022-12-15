import { Modal, useMantineTheme } from '@mantine/core';


function ProfileModal({modalOpened, setModalOpened}) {

    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
            
        >

            <form action="">
                <h3>Your Info</h3>
            </form>
        </Modal>
    );
}


export default ProfileModal;