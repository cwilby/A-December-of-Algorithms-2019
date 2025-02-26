const fs = require('fs');
const path = require('path');
const csvToHtml = require('./index.js');

const stubs = {
  csv: {
    example: `column1,column2,column3
a,123,abc123
b,234,bcd234
c,345,cde345`
  },
  html: {
    example: `<html>
  <body>
    <table>
      <tr><th>column1</th><th>column2</th><th>column3</th></tr>
      <tr><td>a</td><td>123</td><td>abc123</td></tr>
      <tr><td>b</td><td>234</td><td>bcd234</td></tr>
      <tr><td>c</td><td>345</td><td>cde345</td></tr>
    </table>
  </body>
</html>`,
    csv_to_html_res: `<html>
  <body>
    <table>
      <tr><th>Name</th><th>Sex</th><th>Age</th><th>Height (in)</th><th>Weight (lbs)</th></tr>
      <tr><td>Alex</td><td>M</td><td>41</td><td>74</td><td>170</td></tr>
      <tr><td>Bert</td><td>M</td><td>42</td><td>68</td><td>166</td></tr>
      <tr><td>Carl</td><td>M</td><td>32</td><td>70</td><td>155</td></tr>
      <tr><td>Dave</td><td>M</td><td>39</td><td>72</td><td>167</td></tr>
      <tr><td>Elly</td><td>F</td><td>30</td><td>66</td><td>124</td></tr>
      <tr><td>Fran</td><td>F</td><td>33</td><td>66</td><td>115</td></tr>
      <tr><td>Gwen</td><td>F</td><td>26</td><td>64</td><td>121</td></tr>
      <tr><td>Hank</td><td>M</td><td>30</td><td>71</td><td>158</td></tr>
      <tr><td>Ivan</td><td>M</td><td>53</td><td>72</td><td>175</td></tr>
      <tr><td>Jake</td><td>M</td><td>32</td><td>69</td><td>143</td></tr>
      <tr><td>Kate</td><td>F</td><td>47</td><td>69</td><td>139</td></tr>
      <tr><td>Luke</td><td>M</td><td>34</td><td>72</td><td>163</td></tr>
      <tr><td>Myra</td><td>F</td><td>23</td><td>62</td><td>98</td></tr>
      <tr><td>Neil</td><td>M</td><td>36</td><td>75</td><td>160</td></tr>
      <tr><td>Omar</td><td>M</td><td>38</td><td>70</td><td>145</td></tr>
      <tr><td>Page</td><td>F</td><td>31</td><td>67</td><td>135</td></tr>
      <tr><td>Quin</td><td>M</td><td>29</td><td>71</td><td>176</td></tr>
      <tr><td>Ruth</td><td>F</td><td>28</td><td>65</td><td>131</td></tr>
    </table>
  </body>
</html>`
  }
};

describe('csvToHtml', () => {
  it('should convert example csv to html', () => {
    const csv = stubs.csv.example;

    const html = csvToHtml(csv);

    const expectedHtml = stubs.html.example;

    expect(html).toBe(expectedHtml);
  });

  it('should convert csv_to_html_res to html', async done => {
    const csv = await new Promise((resolve, reject) =>
      fs.readFile(
        path.resolve(__dirname, '..', 'src', 'res', 'csv_to_html_res.csv'),
        'utf-8',
        (err, data) => (err ? reject(err) : resolve(data))
      )
    );

    const html = csvToHtml(csv);

    const expectedHtml = stubs.html.csv_to_html_res;

    expect(html).toBe(expectedHtml);

    done();
  });
});
