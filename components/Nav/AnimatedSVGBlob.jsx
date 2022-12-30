import React from "react";

function AnimatedSVGBlob() {
  return (
    <svg viewBox="0 0 800 500" id="blobSvg">
      <g transform="translate(155.3695297241211, 1.7088394165039062)">
        <path fill="#3367FD">
          <animate
            attributeName="d"
            dur="14000ms"
            repeatCount="indefinite"
            values="M408,341.5Q356,433,257.5,420.5Q159,408,93.5,329Q28,250,82.5,152.5Q137,55,235.5,79.5Q334,104,397,177Q460,250,408,341.5Z;
                    M412.5,348Q363,446,266,418Q169,390,112,320Q55,250,97,153.5Q139,57,248,60.5Q357,64,409.5,157Q462,250,412.5,348Z;
                    M431.5,353.5Q370,457,259.5,441.5Q149,426,124.5,338Q100,250,132,175.5Q164,101,245.5,108.5Q327,116,410,183Q493,250,431.5,353.5Z;
                    M408,341.5Q356,433,257.5,420.5Q159,408,93.5,329Q28,250,82.5,152.5Q137,55,235.5,79.5Q334,104,397,177Q460,250,408,341.5Z;"
          ></animate>
        </path>
      </g>
    </svg>
  );
}

export default AnimatedSVGBlob;