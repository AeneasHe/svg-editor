
from bs4 import BeautifulSoup
html_doc="""
<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg"> <g>  <title>Layer 1</title>  <circle id="svg_1" r="75.591" cy="167" cx="204" stroke="#000" fill="#e51c23"/>  

<rect id="svg_2" height="77.71214" width="105.13996" y="256.17513" x="164.74908" stroke="#000" fill="#e51c23"/>  

<rect id="svg_3" height="138.66284" width="120.37763" y="155.60648" x="213.50964" stroke="#000" fill="#e51c23"/> </g></svg>
"""

soup = BeautifulSoup(html_doc, 'html.parser')
print(soup.prettify())
