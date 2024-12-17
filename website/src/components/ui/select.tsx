import * as React from "react";
import { Select as Primitive } from "@base-ui-components/react/select";
import { css, styled } from "@pigment-css/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/src/lib/cn";

const Select = Primitive.Root;

const SelectTriggerRoot = styled(Primitive.Trigger, {
  name: "SelectTriggerRoot",
  slot: "trigger",
})<
  React.ComponentProps<typeof Primitive.Trigger> & {
    size: "sm" | "md" | "lg" | "xl";
  }
>({
  alignItems: "center",
  backgroundColor: "var(--color-background)",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "inherit",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "var(--size-xs)",
  position: "relative",
  whiteSpace: "nowrap",
  width: "var(--size-full)",
  "&:focus-visible": {
    "--ring-offset-width": "0px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "3px",
    "--ring-color": "hsl(var(--color-ring) / 20%)",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    borderColor: "hsl(var(--color-ring))",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "&[data-invalid]": {
    borderColor: "hsl(var(--color-danger))",
  },
  "&[data-invalid]:focus-visible": {
    "--ring-color": "hsl(var(--color-danger) / 20%)",
  },
  variants: [
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingBlock: "calc(var(--spacing-unit) * 1.5)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-sm)",
        },
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingBlock: "calc(var(--spacing-unit) * 2)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-sm)",
        },
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 11)",
        minWidth: "calc(var(--size-unit) * 11)",
        paddingBlock: "calc(var(--spacing-unit) * 2.5)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-lg)",
        },
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 12)",
        minWidth: "calc(var(--size-unit) * 12)",
        paddingBlock: "calc(var(--spacing-unit) * 3)",
        paddingInline: "calc(var(--spacing-unit) * 4)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-lg)",
        },
      },
    },
  ],
} as React.CSSProperties);

const SelectTrigger = ({
  children,
  size = "md",
  ...props
}: React.ComponentProps<typeof SelectTriggerRoot> & {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}): React.JSX.Element => (
  <SelectTriggerRoot size={size} {...props}>
    {children}
    <Primitive.Icon
      className={css({
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      })}
    >
      <ChevronDownIcon
        className={css({
          height: "calc(var(--size-unit) * 4)",
          opacity: 0.5,
          width: "calc(var(--size-unit) * 4)",
        })}
      />
    </Primitive.Icon>
  </SelectTriggerRoot>
);
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = Primitive.Value;

const SelectContent = ({
  children,
  className,
}: React.ComponentProps<typeof Primitive.Popup>): React.JSX.Element => {
  return (
    <Primitive.Portal>
      <Primitive.Positioner side="bottom">
        <Primitive.Popup
          className={cn(
            css({
              backgroundColor: "hsl(var(--color-surface))",
              border: "1px solid hsl(var(--color-border))",
              borderRadius: "var(--borderRadius-md)",
              boxShadow: "var(--shadow-md)",
              boxSizing: "border-box",
              minWidth: "calc(var(--size-unit) * 32)",
              padding: "var(--spacing-unit)",
              width: "var(--size-full)",
              zIndex: "var(--zIndex-dropdown)",
              "&:focus-within": {
                outline: "none",
              },
            }),
            className as string
          )}
        >
          {children}
        </Primitive.Popup>
      </Primitive.Positioner>
    </Primitive.Portal>
  );
};

const SelectGroup = Primitive.Group;

const SelectGroupLabel = Primitive.GroupLabel;

const SelectItem = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Item>): React.JSX.Element => {
  return (
    <Primitive.Item
      className={cn(
        css({
          alignItems: "center",
          borderRadius: "var(--borderRadius-sm)",
          boxSizing: "border-box",
          display: "grid",
          gap: "var(--spacing-unit)",
          gridTemplateColumns: "1fr auto",
          paddingBlock: "var(--spacing-unit)",
          paddingInline: "calc(var(--spacing-unit) * 2)",
          userSelect: "none",
          "&:focus-visible": {
            backgroundColor: "hsl(var(--color-muted))",
            outline: "none",
          },
          "&[data-selected]": {
            backgroundColor: "hsl(var(--color-muted))",
          },
        } as React.CSSProperties),
        className as string
      )}
      {...props}
    >
      <Primitive.ItemText
        className={css({
          fontSize: "var(--fontSize-sm)",
          gridColumnStart: 1,
        })}
      >
        {children}
      </Primitive.ItemText>
      <Primitive.ItemIndicator
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gridColumnStart: 2,
        })}
      >
        <CheckIcon
          className={css({
            height: "calc(var(--size-unit) * 4)",
            width: "calc(var(--size-unit) * 4)",
          })}
        />
      </Primitive.ItemIndicator>
    </Primitive.Item>
  );
};

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectValue,
};
