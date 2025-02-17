import React from 'react';
import '../../css/Product/ProductEditor.css'; // Ensure the CSS file contains relevant styles

const ProductEditor = () => {
  return (
    <div className="Product-settings-card">
      <h5 className="title">Product Settings</h5>
      <div className="form-section">
        <div className="form-section-left">
          <div>
            <span className="field-label">Product Images</span>
            <div className="image-grid">
              {/* Separate media-dropzone for each image input */}
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="media-dropzone">
                  <input accept="image/*" type="file" style={{ display: 'none' }} />
                  <div className="dropzone-content">
                    <i className="icon-image"></i>
                    <p>Browse image</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-fields">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>

            <div className="field-wrapper">
              <label className="field-label" htmlFor="dimensions">L*W*H inches</label>
              <input id="dimensions" name="dimensions" className="text-input" placeholder="Enter dimensions (L*W*H)" />
            </div>

            <div className="field-wrapper">
              <label className="field-label" htmlFor="weight">Weight, kg</label>
              <input id="weight" name="weight" className="text-input" placeholder="Enter weight in kg" />
            </div>

            <div className="field-wrapper">
              <label className="field-label" htmlFor="description">Description</label>
              <textarea id="description" name="description" className="textarea">
                Ut tortor ex, pellentesque nec volutpat vel, congue eu nibh...
              </textarea>
            </div>
          </div>
        </div>
        <div className="form-section-right">
          <div className="first">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
          </div>
          <div className="second">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
          </div>
          <div className="second">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>
          </div>
          <div className="first">
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
          </div>
          <div className="third">
          <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productName">Product Name</label>
              <input id="productName" name="productName" className="text-input" placeholder="Enter product name" value="Sport Smart Watch" />
            </div>
            <div className="field-wrapper">
              <label className="field-label" htmlFor="productType">Attributes</label>
              <div className="select-container">
                <select id="productType" className="select-input">
                  <option>Simple Product</option>
                </select>
              </div>
            </div>
          </div>
          <div className="button-group">
          <button className="btn btn-secondary">Save to Drafts</button>
          <button className="btn btn-primary">Publish Product</button>
        </div>

        </div>

      </div>
    </div>
  );
};

export default ProductEditor;
