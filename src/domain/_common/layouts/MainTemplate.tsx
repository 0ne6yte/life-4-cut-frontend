import { type ReactNode } from 'react';

import { BottomTab } from '@/domain/_common/components';
import Header from '@/domain/_common/components/Header';

interface MainTemplateProps {
  title: string;
  content: ReactNode;
  showFooter?: boolean;
  showBackButton?: boolean;
  headerTools?: ReactNode;
}
function MainTemplate({ title, content, showFooter, showBackButton, headerTools }: MainTemplateProps) {
  return (
    <>
      <Header title={title} showBackButton={showBackButton} tools={headerTools} />
      <div className="overflow-y-scroll flex-1 relative">{content}</div>
      {showFooter && <BottomTab />}
    </>
  );
}

export default MainTemplate;
