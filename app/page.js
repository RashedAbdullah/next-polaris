"use client";

import {
  AppProvider,
  Page,
  Card,
  Button,
  TextField,
  Layout,
  RangeSlider,
  ColorPicker,
  BlockStack,
  InlineStack,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

const HomePage = () => {
  const [placeholder, setPlaceholder] = useState("Discount Code");
  const [buttonLabel, setButtonLabel] = useState("Apply button text");
  const [inputBorderRadius, setInputBorderRadius] = useState(0);
  const [buttonBorderRadius, setButtonBorderRadius] = useState(0);
  const [buttonBgColor, setButtonBgColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 0,
  });

  const [buttonColor, setButtonColor] = useState({
    hue: 0,
    brightness: 1,
    saturation: 0,
  });

  const handleInputBorderRadiusChange = useCallback(
    (value) => setInputBorderRadius(value),
    []
  );

  const handleButtonBorderRadiusChange = useCallback(
    (value) => setButtonBorderRadius(value),
    []
  );

  return (
    <AppProvider i18n={{}}>
      <Page
        title="Customize Discount Block"
        primaryAction={{
          content: "Save",
        }}
      >
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <BlockStack vertical spacing="loose">
                <TextField
                  label="Placeholder"
                  value={placeholder}
                  onChange={(value) => setPlaceholder(value)}
                />

                <div>
                  <p>Input Border Radius</p>
                  <RangeSlider
                    value={inputBorderRadius}
                    onChange={handleInputBorderRadiusChange}
                    min={0}
                    max={20}
                    output
                  />
                </div>

                <TextField
                  label="Button Label"
                  value={buttonLabel}
                  onChange={(value) => setButtonLabel(value)}
                />

                <div>
                  <p>Button Background Color</p>
                  <ColorPicker
                    onChange={setButtonBgColor}
                    color={buttonBgColor}
                  />
                </div>

                <div>
                  <p>Button Text Color</p>
                  <ColorPicker onChange={setButtonColor} color={buttonColor} />
                </div>

                <div>
                  <p>Button Border Radius</p>
                  <RangeSlider
                    value={buttonBorderRadius}
                    onChange={handleButtonBorderRadiusChange}
                    min={0}
                    max={20}
                    output
                  />
                </div>
              </BlockStack>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card sectioned>
              <InlineStack vertical spacing="loose">
                <TextField
                  label="Discount Code"
                  value={placeholder}
                  placeholder={placeholder}
                />
                <Button variant="primary">{buttonLabel}</Button>

                <div>
                  <p>Discount: -50$</p>
                  <p>Total: 100$</p>
                </div>
              </InlineStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
};

export default HomePage;
