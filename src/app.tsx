import { MicroAppStateActions, LoadableApp } from 'qiankun';
import { AppProps } from 'single-spa';
import { singleton } from '@/singleton';

interface ContainerProps {
  container?: HTMLElement;
}
interface LifeCycleProps
  extends ContainerProps,
    AppProps,
    MicroAppStateActions {}

window.routerBase = window.__POWERED_BY_QIANKUN__ ? '/dashboard/react/' : '/';

export const qiankun = {
  async bootstrap(props: LifeCycleProps) {
    console.log('app1 bootstrap', props);
  },
  async mount(props: LifeCycleProps) {
    console.log('app1 mount', props);
    singleton.onGlobalStateChange = props.onGlobalStateChange;
  },
  async unmount(props: LifeCycleProps) {
    console.log('app1 unmount', props);
  },
};
