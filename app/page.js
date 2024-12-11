"use client";

import {
  AppProvider,
  Page,
  Card,
  Button,
  TextField,
  Layout,
  RangeSlider,
  BlockStack,
  InlineStack,
} from "@shopify/polaris";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [placeholder, setPlaceholder] = useState("Discount Code");
  const [buttonLabel, setButtonLabel] = useState("Apply");
  const [inputBorderRadius, setInputBorderRadius] = useState(0);
  const [buttonBorderRadius, setButtonBorderRadius] = useState(0);
  const [fontColor, setFontColor] = useState("#000000");
  const [buttonBgColor, setButtonBgColor] = useState("#007BFF");
  const [buttonTextColor, setButtonTextColor] = useState("#FFFFFF");
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent server-rendered mismatch

  return (
    <AppProvider i18n={{}}>
      <Page
        title="Customize Discount Block"
        primaryAction={{
          content: "Save",
        }}
      >
        <Layout>
          {/* Control Panel Section */}
          <Layout.Section>
            <Card sectioned>
              <BlockStack vertical spacing="loose">
                {/* Input Placeholder */}
                <TextField
                  label="Placeholder"
                  value={placeholder}
                  onChange={(value) => setPlaceholder(value)}
                />

                {/* Input Border Radius */}
                <div>
                  <p>Input Border Radius</p>
                  <RangeSlider
                    value={inputBorderRadius}
                    onChange={setInputBorderRadius}
                    min={0}
                    max={20}
                    output
                  />
                </div>

                {/* Button Label */}
                <TextField
                  label="Button Label"
                  value={buttonLabel}
                  onChange={(value) => setButtonLabel(value)}
                />

                {/* Font Color Picker */}
                <div>
                  <label>Font Color:</label>
                  <input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                  />
                </div>

                {/* Button Background Color Picker */}
                <div>
                  <label>Button Background Color:</label>
                  <input
                    type="color"
                    value={buttonBgColor}
                    onChange={(e) => setButtonBgColor(e.target.value)}
                  />
                </div>

                {/* Button Text Color Picker */}
                <div>
                  <label>Button Text Color:</label>
                  <input
                    type="color"
                    value={buttonTextColor}
                    onChange={(e) => setButtonTextColor(e.target.value)}
                  />
                </div>

                {/* Button Border Radius */}
                <div>
                  <p>Button Border Radius</p>
                  <RangeSlider
                    value={buttonBorderRadius}
                    onChange={setButtonBorderRadius}
                    min={0}
                    max={20}
                    output
                  />
                </div>
              </BlockStack>
            </Card>
          </Layout.Section>

          {/* Preview Section */}
          <Layout.Section>
            <Card sectioned>
              <InlineStack vertical spacing="loose">
                {/* Input Preview */}
                <TextField
                  label="Discount Code"
                  value={placeholder}
                  placeholder={placeholder}
                  style={{
                    borderRadius: `${inputBorderRadius}px`,
                  }}
                />

                {/* Button Preview */}
                <Button
                  style={{
                    backgroundColor: buttonBgColor,
                    color: buttonTextColor,
                    borderRadius: `${buttonBorderRadius}px`,
                  }}
                  fullWidth
                >
                  {buttonLabel}
                </Button>

                {/* Summary */}
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
