Lần trước đến thăm nhà A Phủ chúng ta đã biết cầu thang nhà A Phủ có một số bậc bị hỏng, lần này A Phủ đã sửa lại cầu thang nhà mình nhưng do tính thích hoành tráng nên A Phủ làm cầu thang rất cao, có rất nhiều bậc. Tuy nhiên, do làm quá nhiều bậc nên rất tốn kém, để tiết kiệm chi phí, A Phủ đã nghĩ ra cách làm tiết kiệm đó là trong mỗi $3$ bậc thì lại để khuyết một bậc. Cụ thể là khuyết các bậc số $2, 5, 8, 11, …$

Do các bậc cầu thang nhà A Phủ làm rất thấp nên đứng tại mỗi bậc có thể bước lên $1, 2$, hoặc $3$ bậc (nếu bậc bước lên không bị khuyết). Chẳng hạn đứng từ sân có thể bước lên bậc $1$, (bậc $2$ khuyết), bậc $3$; đứng ở bậc $1$ có thể bước lên (bậc $2$ khuyết), bậc $3$, bậc $4$.

A Phủ rất giỏi toán học nên luôn đặt ra những câu đố để đố các vị khách đến chơi. Câu đố của A Phủ là: Cho số $m$ và $m$ số nguyên dương $n_1, n_2, …, n_m$. Hãy hãy tính số cách bước từ sân lên các bậc có chỉ số là $n_1, n_2, …, n_m$.

Lần này bạn là một vị khách ghé thăm nhà A Phủ, hãy trả lời giúp A Phủ nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $m$;
- Dòng hai chứa $m$ số nguyên dương $n_1, n_2, …, n_m$.

Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất chứa m số cách bước lên các bậc $n_1, n_2, …, n_m$ (chia cho $10^9 + 7$ lấy phần dư). Hai số liên tiếp cách nhau một dấu cách.

## Ví dụ:
### Dữ liệu vào:
```
7
1 3 4 5 6 7 9
```

### Dữ liệu ra:
```
1 2 3 0 5 8 13
```

## Giới hạn:
- $1 ≤ m ≤ 1000; 0 ≤ n_i ≤ 10^{18}$.