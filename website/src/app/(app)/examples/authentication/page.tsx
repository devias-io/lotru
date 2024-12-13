import * as React from "react";
import { css } from "@pigment-css/react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Stack } from "@/src/components/ui/stack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Text } from "@/src/components/ui/text";

export default function Page(): React.JSX.Element {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        height: "800px",
        padding: "calc(var(--spacing-unit) * 2)",
        position: "relative",
      })}
    >
      <div
        className={css({
          display: "grid",
          padding: "calc(var(--spacing-unit) * 4)",
          placeItems: "center",
        })}
      >
        <Stack className={css({ maxWidth: "400px", width: "var(--size-full)" })} gap={4}>
          <div>
            <svg
              width={60}
              height={60}
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6C0 2.68629 2.68629 0 6 0H54C57.3137 0 60 2.68629 60 6V54C60 57.3137 57.3137 60 54 60H6C2.68629 60 0 57.3137 0 54V6Z"
                fill="#212124"
              />
              <path
                d="M40.9812 46.7151C38.9693 47.9658 36.9894 49.1825 35.0246 50.4255C34.6335 50.6729 34.3249 50.7011 33.9194 50.4486C27.7922 46.6343 21.658 42.8321 15.5199 39.0369C15.1453 38.8053 14.9994 38.5244 15 38.0695C15.0104 30.4942 15.0087 22.9189 15.0037 15.3436C15.0034 14.9173 15.0753 14.5922 15.4754 14.3476C18.0667 12.7639 20.6474 11.1611 23.2233 9.55014C23.5532 9.34381 23.8197 9.30298 24.1654 9.5187C27.4343 11.5587 30.7075 13.5913 33.9909 15.6059C34.4166 15.8672 34.5425 16.1862 34.5396 16.6798C34.5223 19.7099 34.5434 22.7401 34.5222 25.7701C34.518 26.3618 34.6856 26.7312 35.194 27.0402C37.7014 28.5648 40.1834 30.1346 42.6833 31.6727C43.004 31.87 43.1242 32.1037 43.1235 32.4836C43.115 36.608 43.115 40.7324 43.125 44.8568C43.1259 45.238 43.0125 45.488 42.6892 45.673C42.1241 45.9964 41.5746 46.3496 40.9812 46.7151ZM34.361 38.256C34.4478 37.6369 34.1992 37.2622 33.672 36.9438C31.214 35.4595 28.7844 33.924 26.3331 32.4273C25.9202 32.1752 25.7429 31.8846 25.7464 31.3731C25.7674 28.3026 25.7506 25.2318 25.7661 22.1613C25.7687 21.6462 25.625 21.2973 25.1827 21.026C22.8731 19.6097 20.5794 18.1655 18.2751 16.7397C17.5554 16.2945 17.3581 16.4177 17.3577 17.3003C17.3548 23.7571 17.3605 30.2139 17.3464 36.6707C17.3454 37.1381 17.5151 37.3918 17.8827 37.6192C23.081 40.8347 28.2723 44.0626 33.4663 47.2856C34.2267 47.7574 34.3576 47.6822 34.3587 46.7678C34.3622 43.9706 34.3601 41.1734 34.361 38.256Z"
                fill="white"
              />
            </svg>
          </div>
          <Stack gap={2}>
            <Text fontSize="xl" fontWeight="medium">
              Welcome to Lotru UI
            </Text>
            <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
              Sign in and continue where you&apos;ve left off.
            </Text>
          </Stack>
          <Tabs value="sign-in">
            <TabsList
              className={css({
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              })}
            >
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent
              className={css({ marginBlockStart: "calc(var(--spacing-unit) * 4)" })}
              value="sign-in"
            >
              <Stack gap={4}>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    className={css({ maxWidth: "var(--size-full)" })}
                    name="email"
                    placeholder="Email"
                  />
                </Field>
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    className={css({ maxWidth: "var(--size-full)" })}
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </Field>
                <Stack alignItems="center" direction="row" gap={2}>
                  <Checkbox defaultChecked name="remember" />
                  <Text fontSize="sm" fontWeight="medium">
                    Remember this device
                  </Text>
                </Stack>
                <Button className={css({ width: "var(--size-full)" })}>
                  Sign in
                  <ArrowRightIcon />
                </Button>
                <Text
                  className={css({
                    color: "hsl(var(--color-mutedForeground))",
                    textAlign: "center",
                  })}
                  fontSize="sm"
                >
                  Don&apos;t remember your password?{" "}
                  <Text
                    as="span"
                    className={css({
                      color: "hsl(var(--color-foreground))",
                      textDecoration: "underline",
                    })}
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    Recover
                  </Text>
                </Text>
              </Stack>
            </TabsContent>
          </Tabs>
        </Stack>
      </div>
      <div
        className={css({
          backgroundColor: "hsl(var(--color-primary))",
          borderRadius: "var(--borderRadius-2xl)",
          color: "hsl(var(--color-primaryForeground))",
          display: "grid",
          padding: "calc(var(--spacing-unit) * 4)",
          placeItems: "center",
        })}
      >
        <Stack className={css({ maxWidth: "400px", width: "var(--size-full)" })} gap={2.5}>
          <Text fontSize="3xl" fontWeight="medium">
            Simplify Your Web App Design with Lotru
          </Text>
          <Text
            className={css({ color: "hsl(var(--color-primaryForeground) / 50%)" })}
            fontSize="lg"
          >
            A modern design system built on the web&apos;s most powerful, accessible library.
          </Text>
        </Stack>
      </div>
    </div>
  );
}
