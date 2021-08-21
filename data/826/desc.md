**<center>Trại hè tin học Thái Nguyên 2020 - Khối lớp 11</center>**

Đất nước Thụy Sỹ nổi tiếng với những ngọn núi cao ngất và những hồ nước xanh trong vắt. Nơi đây không có những thành phố sầm uất như London, Paris hay những công trình nổi tiếng để thu hút khách du lịch. Thụy Sỹ lôi cuốn bởi vẻ đẹp hoang dã mà thiên nhiên ban tặng. Du khách năm châu tới đây chủ yếu để leo lên những đỉnh núi cao ngất như Rigi, Pilatus hay Alps; chiêm ngưỡng cảnh thiên nhiên hùng vĩ và thu trọn cả đất nước Thụy Sỹ vào tầm mắt.

Trong kỳ thực tập tại Google Zurich, GSPVH lên kế hoạch chinh phục hết các ngọn núi tại đây. Đất nước Thụy Sỹ có $𝑛$ ngọn núi, chia vào $𝑘$ khu vực. $𝑘$ khu vực này có thể giao nhau, vì thế một ngọn núi có thể thuộc về nhiều hơn một khu vực. Nói cách khác, mỗi khu vực là một tập con của tập hợp $𝑛$ ngọn núi. Để thuận tiện, các ngọn núi được đánh số từ $1$ tới $𝒏$, và ta sẽ coi như có $𝒏 + 𝒌$ khu vực, đánh số từ $𝟏$ tới $𝒏 + 𝒌$. Các khu vực từ $1$ tới $𝑛$ chỉ có một ngọn núi (khu vực $𝑖$ bao gồm ngọn núi $𝑖$), các khu vực từ $𝑛 + 1$ tới $𝑛 + 𝑘$ có ít nhất hai ngọn núi.

Trước khi lên lịch khám phá $𝑛$ ngọn núi, GSPVH thu thập thông tin về độ hiểm trở của chúng thông qua những thực tập sinh khác. Theo đó, độ hiểm trở của mỗi ngọn núi thuộc một trong $𝑛$ mức, đánh số từ $1$ tới $𝑛$ và không có hai ngọn núi nào có cùng độ hiểm trở. Ngoài ra, những người bạn của GSPVH còn cung cấp $𝑚$ mẩu thông tin, thuộc một trong bốn dạng sau:
1. $𝑀𝐴𝑋\ 𝑥\ 𝑦$ với $1 ≤ 𝑦 ≤ 𝑛 < 𝑥 ≤ 𝑛 + 𝑘$, cho biết trong khu vực $𝑥$, ngọn núi $𝑦$ có độ hiểm trở lớn nhất;
2. $𝑀𝐼𝑁\ 𝑥\ 𝑦$ với $1 ≤ 𝑦 ≤ 𝑛 < 𝑥 ≤ 𝑛 + 𝑘$, cho biết trong khu vực $𝑥$, ngọn núi $𝑦$ có độ hiểm trở nhỏ nhất;
3. $𝑥 < 𝑦$ với $1 ≤ 𝑥, 𝑦 ≤ 𝑛 + 𝑘$, cho biết mọi ngọn núi ở khu vực $𝑥$ có độ hiểm trở không lớn hơn mọi ngọn núi ở khu vực $𝑦$;
4. $𝑥 > 𝑦$ với $1 ≤ 𝑥, 𝑦 ≤ 𝑛 + 𝑘$, cho biết mọi ngọn núi ở khu vực $𝑥$ có độ hiểm trở không nhỏ hơn mọi ngọn núi ở khu vực $𝑦$.

GSPVH muốn chinh phục các đỉnh núi với độ hiểm trở tăng dần. Vì vậy các bạn hãy sắp xếp các ngọn núi theo thứ tự này nhé. Do thông tin thu thập được còn ít, có thể có nhiều thứ tự cùng thỏa mãn. Trong trường hợp đó, bạn nên đưa ra dãy có thứ tự từ điển nhỏ nhất. Dữ liệu vào đảm bảo có ít nhất một thứ tự hợp lệ.

## Dữ liệu vào:
- Dòng thứ nhất chứa ba số nguyên dương $𝑛, 𝑘$, và $𝑚\ (1 ≤ 𝑛 ≤ 2×10^5, 1 ≤ 𝑘 ≤ 10^5, 1 ≤ 𝑚 ≤ 3×10^5)$ - số ngọn núi, số khu vực và số mẩu thông tin GSPVH thu được;
- $𝑘$ dòng tiếp theo, dòng thứ $𝑖$ gồm hai số $𝑥$ và $𝑦\ (1 ≤ 𝑥, 𝑦 < 𝑛 + 𝑖)$; thể hiện tập hợp các ngọn núi thuộc khu vực $𝑛 + 𝑖$ là hợp của tập hợp các ngọn núi thuộc khu vực $𝑥$ và khu vực $𝑦$;
- $𝑚$ dòng tiếp theo, mỗi dòng thể hiện một mẩu thông tin theo một trong bốn dạng nêu trên.

## Dữ liệu ra:
- Gồm một dòng duy nhất chứa $𝑛$ số, lần lượt là số thứ tự của các ngọn núi theo thứ tự độ hiểm trở tăng dần.

## Giới hạn:
Với mỗi test, bạn sẽ nhận được 
- $100\%$ số điểm nếu đáp án của bạn thoả mãn tất cả 𝒎 mẩu thông tin và có thứ tự từ điển nhỏ nhất, hoặc
- $77\%$ số điểm nếu đáp án của bạn thoả mãn thất cả $𝒎$ mẩu thông tin, hoặc
- $46\%$ số điểm nếu đáp án của bạn thoả mãn tất cả các mẩu thông tin loại $3$ và $4\ (𝑥 < 𝑦$ 
hoặc $𝑥 > 𝑦)$ với $𝒙, 𝒚 ≤ 𝒏$, hoặc
- $17\%$ số điểm nếu đáp án của bạn là hoán vị của các số tự nhiên từ $𝟏$ tới $𝒏$, hoặc
- $0$ điểm trong các trường hợp còn lại.

## Ví dụ:
#### Dữ liệu vào:
```
7 5 4
2 4
8 1
3 6
7 3
10 11
12 > 9
MIN 8 4
MAX 12 6
11 < 10
```

#### Dữ liệu ra:
```
1 4 2 5 7 3 6
```

#### Dữ liệu vào:
```
4 1 2
1 2
1 > 2
5 > 3
```

#### Dữ liệu ra:
```
4 1 2 3
```

Hoặc một trong các thứ tự sau:
```
4 2 1 3
4 3 2 1
3 2 1 4
```

#### Giải thích:
Trong ví dụ đầu tiên:
- Có $𝑛 = 7$ ngọn núi và $𝑛 + 𝑘 = 12$ khu vực.
- Khu vực $1$ có ngọn núi $1$, khu vực $2$ có ngọn núi $2$,…, khu vực $7$ có ngọn núi $7$.
- Khu vực $8$ có các ngọn núi $2$ và $4$.
- Khu vực $9$ có các ngọn núi $1, 2$ và $4$.
- Khu vực $10$ có các ngọn núi $3$ và $6$.
- Khu vực $11$ có các ngọn núi $7$ và $3$.
- Khu vực $12$ có các ngọn núi $3, 6$ và $7$.
Trong ví dụ thứ hai: $4$ dữ liệu ra mẫu, từ trên xuống dưới, lần lượt cho $17\%$ số điểm, $46\%$ số 
điểm, $77\%$ số điểm và $100\%$ số điểm.