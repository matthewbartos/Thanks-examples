import { ThanksBlock, ThanksWidget } from "@thanksjs/react-native-webview";

import {
  ThanksWidgetController,
  thanksWidget,
} from "@thanksjs/react-native-webview";
import {
  type ComponentProps,
  type FC,
  type PropsWithChildren,
  useState,
} from "react";
import { View, Text, Button, Modal, SafeAreaView } from "react-native";

type DirectWidgetProps = {
  onClose: ComponentProps<typeof ThanksWidget>["onClose"];
};

const CustomWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Modal>{children}</Modal>
);

const DirectWidget = ({ onClose }: DirectWidgetProps) => {
  return (
    <ThanksWidget
      // FIXME: this is thanksjs own Id
      partnerId="2a37e310-e0a2-46d0-b46b-0c55f902c169"
      statusText="DIRECT"
      email="test@test.com"
      onClose={onClose ?? (() => {})}
      wrapperComponent={CustomWrapper}
    />
  );
};

const IndirectWidget = () => {
  return (
    <>
      <Button
        onPress={() =>
          thanksWidget.open({
            statusText: "thanks for being awesome",
          })
        }
        title="Click here to Display Thanks"
      />
      <ThanksWidgetController
        email="test@test.com"
        // FIXME: this is thanksjs own Id
        partnerId="2a37e310-e0a2-46d0-b46b-0c55f902c169"
      />
    </>
  );
};

export default function App() {
  const [mode, setMode] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 152,
        }}
      >
        <ThanksBlock
          slot="slot-mobile"
          partnerId="949ca5e1-8a92-4198-948c-a9400fdf9fb1"
          widgetConfiguration={{
            animationType: "slide",
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "82%",
        }}
      >
        <Button
          title="display simple example"
          onPress={() => {
            setMode(1);
            setIsOpen(true);
          }}
        />
        <Button title="display indirect example" onPress={() => setMode(2)} />
        <Text>mode is: {["none", "simple", "indirect"][mode]}</Text>
        {new Array(10).fill(0).map((_, i) => (
          <Text key={i} style={{ color: "#FFF" }}>
            {new Array(4).fill(" Thanks ").join("")}
          </Text>
        ))}
        {mode === 1 && isOpen && <DirectWidget onClose={handleClose} />}
        {mode === 2 && <IndirectWidget />}
      </View>
    </SafeAreaView>
  );
}
