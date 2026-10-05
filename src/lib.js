import { useSelect } from '@wordpress/data';
export function useDeviceType() {
  return useSelect((select) => {
    // WP 6.5+: post editor AND site editor
    const editor = select('core/editor');
    if (editor?.getDeviceType) {
      return editor.getDeviceType();
    }

    // Older site editor
    const editSite = select('core/edit-site');
    if (editSite?.__experimentalGetPreviewDeviceType) {
      return editSite.__experimentalGetPreviewDeviceType();
    }

    // Older post editor
    const editPost = select('core/edit-post');
    if (editPost?.__experimentalGetPreviewDeviceType) {
      return editPost.__experimentalGetPreviewDeviceType();
    }

    return 'Desktop';
  }, []);
}

import {
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalDistributeCenter,
  AlignVerticalSpaceBetween,
  StretchVertical,
  AlignStartVertical,
  AlignEndVertical,
  AlignHorizontalJustifyCenter,
  AlignHorizontalSpaceBetween,
  AlignHorizontalSpaceAround,
  StretchHorizontal,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  Ban,
} from "lucide-react";


export const ICONS = {
  VJustifyEnd: AlignVerticalJustifyEnd,
  VJustifyStart: AlignVerticalJustifyStart,
  VJustifyCenter: AlignVerticalJustifyCenter,
  VDistributeCenter: AlignVerticalDistributeCenter,
  VSpaceBetween: AlignVerticalSpaceBetween,
  VStrech: StretchVertical,
  HStart: AlignStartVertical,
  HEnd: AlignEndVertical,
  HJustifyCenter: AlignHorizontalJustifyCenter,
  HSpaceBetween: AlignHorizontalSpaceBetween,
  HSpaceAround: AlignHorizontalSpaceAround,
  HStrech: StretchHorizontal,
  Ban: Ban,
  ArrowUp: ArrowUp,
  ArrowRight: ArrowRight,
  ArrowDown: ArrowDown,
  ArrowLeft: ArrowLeft,
}

export const getWidth = (deviceType, attributes) => {
  if (deviceType == "Desktop") {
    return attributes.width ? attributes.width : undefined
  } else if (deviceType == "Tablet") {
    return attributes.tabletWidth ? attributes.tabletWidth : undefined
  } else {
    return attributes.mobileWidth ? attributes.mobileWidth : undefined
  }
}

export const getColumnGap = (deviceType, attributes) => {
  if (deviceType == "Desktop") {
    return attributes.columnGap ? attributes.columnGap : undefined
  } else if (deviceType == "Tablet") {
    return attributes.tabletColumnGap ? attributes.tabletColumnGap : undefined
  } else {
    return attributes.mobileColumnGap ? attributes.mobileColumnGap : undefined
  }
}

export const getRowGap = (deviceType, attributes) => {
  if (deviceType == "Desktop") {
    return attributes.rowGap ? attributes.rowGap : undefined
  } else if (deviceType == "Tablet") {
    return attributes.tabletRowGap ? attributes.tabletRowGap : undefined
  } else {
    return attributes.mobileRowGap ? attributes.mobileRowGap : undefined
  }
}

export const classNames = (attributes) => {

  const {
    justifyContent,
    tabletJustifyContent,
    mobileJustifyContent,
    alignItems,
    tabletAlignItems,
    mobileAlignItems,
    direction,
    tabletDirection,
    mobileDirection,
    wrap,
    tabletWrap,
    mobileWrap,
    display,
    tabletDisplay,
    mobileDisplay,
    grow,
    tabletGrow,
    mobileGrow,
    shrink,
    tabletShrink,
    mobileShrink,
  } = attributes;

  const classNames = [];

  classNames.push("taufb");

  if (justifyContent) {
    classNames.push(`taufb--justify-${justifyContent}`);
  }
  if (tabletJustifyContent) {
    classNames.push(
      `taufb--justify-tablet-${tabletJustifyContent}`,
    );
  }
  if (mobileJustifyContent) {
    classNames.push(
      `taufb--justify-mobile-${mobileJustifyContent}`,
    );
  }

  if (alignItems) {
    classNames.push(`taufb--align-${alignItems}`);
  }
  if (tabletAlignItems) {
    classNames.push(
      `taufb--align-tablet-${tabletAlignItems}`,
    );
  }
  if (mobileAlignItems) {
    classNames.push(
      `taufb--align-mobile-${mobileAlignItems}`,
    );
  }

  if (direction) {
    classNames.push(`taufb--direction-${direction}`);
  }
  if (tabletDirection) {
    classNames.push(
      `taufb--direction-tablet-${tabletDirection}`,
    );
  }
  if (mobileDirection) {
    classNames.push(
      `taufb--direction-mobile-${mobileDirection}`,
    );
  }

  if (wrap) {
    classNames.push(`taufb--wrap-${wrap}`);
  }
  if (tabletWrap) {
    classNames.push(
      `taufb--wrap-tablet-${tabletWrap}`,
    );
  }
  if (mobileWrap) {
    classNames.push(
      `taufb--wrap-mobile-${mobileWrap}`,
    );
  }

  if (display) {
    classNames.push(`taufb--display-${display}`);
  }
  if (tabletDisplay) {
    classNames.push(
      `taufb--display-tablet-${tabletDisplay}`,
    );
  }
  if (mobileDisplay) {
    classNames.push(
      `taufb--display-mobile-${mobileDisplay}`,
    );
  }

  if (grow) {
    classNames.push(`taufb--grow-${grow}`);
  }
  if (tabletGrow) {
    classNames.push(
      `taufb--grow-tablet-${tabletGrow}`,
    );
  }
  if (mobileGrow) {
    classNames.push(
      `taufb--grow-mobile-${mobileGrow}`,
    );
  }

  if (shrink) {
    classNames.push(`taufb--shrink-${shrink}`);
  }
  if (tabletShrink) {
    classNames.push(
      `taufb--shrink-tablet-${tabletShrink}`,
    );
  }
  if (mobileShrink) {
    classNames.push(
      `taufb--shrink-mobile-${mobileShrink}`,
    );
  }

  return classNames
}