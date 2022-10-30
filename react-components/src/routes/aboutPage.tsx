import Shell from '../components/shell';
import { useGlobalContext } from '../components/globalState';
import Modal from '../components/modal';
import ModalContent from '../components/modalContent';
export default function About() {
  const { modalCtxData, page } = useGlobalContext();
  if (!modalCtxData[0]) {
    location.pathname = '/';
    return <></>;
  }
  return (
    <Shell>
      <Modal>
        <ModalContent modalContent={modalCtxData[0]} page={page} />
      </Modal>
    </Shell>
  );
}
