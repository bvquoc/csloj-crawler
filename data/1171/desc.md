**<center>NGUỒN: PVH PreVOI ONLINE 2020 (13 - 14/12/2019)</center>**
<br>

Giáo sư Thích Trà Sữa là một trong những giáo sư cộm cán nhất trong làng giáo sư dạy thuật toán ở Việt Nam. Là người đức rộng tài cao, lại có lòng thương người tha thiết, GS luôn đi khắp các vùng miền trên đất nước Việt Nam, dạy cho các học sinh những bài học lý thú thuộc nhiều lĩnh vực khác nhau như tin học, sinh học, triết học, và cả chống đẩy học. Không chỉ là giáo sư uyên bác, Thích Trà Sữa còn là nhà từ thiện hào phóng. Ở mỗi đợt dạy, GS đều ủng hộ trà sữa miễn phí cho các bạn học sinh xuất sắc, có hoàn cảnh giàu vượt sướng.

Năm nay, sau khi hợp tác với công ty Google tại Zurich (Thuỵ Sỹ), GS được công ty chi trả cho một lượng khổng lồ các loại chocolate miếng của thương hiệu [Cailler](https://www.cailler.ch/en). Vậy là ngoài trà sữa, GS còn tặng cho mỗi bạn một miếng chocolate nho nhỏ, như món quà chào mừng các bạn tân học sinh. Tuy nhiên, việc tặng chocolate tại các lớp học vùng sâu vùng xa không hề đơn giản. Chocolate cần được bảo quản vô cùng cẩn thận để tránh việc suy giảm về chất lượng cũng như hao hụt về số lượng.

Trong một lần xuôi Nam dạy học, GS Thích Trà Sữa vô ý để lọ chocolate trên bàn rồi chạy ra ngoài, và sau đó chocolate bị chuột tha mất trước khi được phát hết cho học sinh. Điều này khiến GS vô cùng thất vọng và đau khổ. GS để ý rằng, cứ mỗi lần chạy ra ngoài, lọ chocolate lại bị hao hụt dần. GS quyết định thuê thám tử PVH sinh ngày $22$ tháng $7$ để theo dõi loài 
chuột này.

Sau nhiều lần theo dõi, thám tử PVH phát hiện loài chuột này có tên khoa học là PPT, có đặc điểm tóc dài, chân dài, hai tay dài, có thể đi được và đứng được. Nhờ vậy loài chuột này có thể rình rập, mở lọ lấy chocolate ra rồi chạy về hang rất nhanh mà không để lại dấu vết gì.

Ngoài ra, quy luật ăn lén chocolate của loài chuột này như sau:
- Con chuột biết rằng lọ chocolate của GS Thích Trà Sữa có $𝑛$ loại khác nhau, ứng với $𝑛$ màu. Chúng sắp xếp các loại theo thứ tự giảm dần về độ ngon, và đánh số các loại từ $1$ tới $𝑛$. Như vậy, loại $1$ ngon nhất, loại $𝑛$ kém ngon nhất.
- Mỗi khi GS Thích Trà Sữa sơ hở, con chuột sẽ chạy ra, lấy mỗi loại $1$ miếng chocolate rồi quay về hang. Do lọ chocolate của GS siêu to khổng lồ, chuột luôn có đủ chocolate để lấy.
- Con chuột ăn $𝑛$ miếng chocolate vừa lấy được, ăn lần lượt từng miếng trong một phút.
- Có những thời điểm, con chuột luôn muốn ăn miếng chocolate ngon hơn thời điểm khác. Cụ thể hơn, thám tử PVH liệt kê được $𝑚$ cặp số $(𝑎_𝑖, 𝑏_𝑖)$ sao cho miếng chocolate thứ $𝑎_𝑖$ được ăn luôn ngon hơn miếng thứ $𝑏_𝑖$.
- Con chuột luôn chọn thứ tự ăn các miếng chocolate sao cho dãy này có thứ tự từ điển nhỏ nhất, và không bị trùng với mọi lần ăn trước đó.

Nói cách khác, sau mỗi lần lấy được $𝑛$ miếng chocolate (mỗi loại $1$ miếng) rồi trở về hang, con chuột sẽ chọn ra thứ tự ăn $𝑛$ miếng chocolate này. Nếu gọi $𝑝_𝑖$ là loại của miếng chocolate được ăn thứ $𝑖$, ta có $𝑝 = (𝑝_1, 𝑝_2, … , 𝑝_𝑛)$ là một hoán vị của $(1, 2, … , 𝑛)$ sao cho với mọi $1 ≤ 𝑖 ≤ 𝑚, 𝑝_{𝑎_𝑖} < 𝑝_{𝑏_𝑖}$. Con chuột sẽ chọn dãy $𝑝$ có thứ tự từ điển nhỏ nhất thoả mãn các điều kiện trên mà chưa được chọn ở các lần lấy chocolate trước đó.

GS Thích Trà Sữa hỏi thám tử PVH sinh ngày $22$ tháng $7$ rằng, ở lần lấy chocolate thứ $𝑘$, con chuột sẽ ăn $𝑛$ miếng chocolate theo thứ tự nào. Do chưa được học thuật toán cẩn thận, thám tử PVH cần nhờ tới sự giúp đỡ của các bạn. Lưu ý rằng, có thể tới lần thứ $𝑘$, không còn thứ tự hợp lệ nào chưa được chọn. Thám tử PVH không biết con chuột sẽ xử lý ra sao, nhưng bạn cần chỉ ra trường hợp này.

Nhắc lại, dãy $𝑝 = (𝑝_1, 𝑝_2, … , 𝑝_𝑛)$ có thứ tự từ điển nhỏ hơn dãy $𝑞 = (𝑞_1, 𝑞_2, … , 𝑞_𝑛)$ khi và chỉ khi tồn tại chỉ số $𝑖$ thoả mãn $1 ≤ 𝑖 ≤ 𝑛, 𝑝_1 = 𝑞_1, 𝑝_2 = 𝑞_2, … , 𝑝_{𝑖−1} = 𝑞_{𝑖−1}$ và $𝑝_𝑖 < 𝑞_𝑖$.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên $𝑛, 𝑘$ và $𝑚$ $(1 ≤ 𝑛 ≤ 16, 1 ≤ 𝑘 ≤ 10^{18}, 0 ≤ 𝑚 ≤ 256)$ là số loại chocolate GS Thích Trà Sữa có, lần lấy chocolate đang xét và số cặp thời điểm mà thám tử PVH tìm được.
- Trong $𝑚$ dòng tiếp theo, mỗi dòng chứa hai số nguyên $𝑎_𝑖$ và $𝑏_𝑖$ $(1 ≤ 𝑎_𝑖, 𝑏_𝑖 ≤ 𝑛)$ thể hiện một cặp số mang ý nghĩa như trình bày ở trên.

## Dữ liệu ra:
- Nếu tới lần lấy chocolate thứ $𝑘$, mọi thứ tự ăn $𝑛$ miếng chocolate hợp lệ đều đã được chọn trước đó, in ra cụm từ `𝑝𝑜𝑜𝑟⁡ 𝑝𝑟𝑜𝑓𝑒𝑠𝑠𝑜𝑟`. Ngược lại, in ra $𝑛$ số nguyên $𝑝_1, 𝑝_2, … , 𝑝_𝑛$, trong đó $𝑝_𝑖$ là loại của miếng chocolate được ăn thứ $𝑖$.

## Giới hạn:
- **Subtask** $\#1$ $(10\% \text{ số điểm}): 𝑛 ≤ 8$
- **Subtask** $\#2$ $(15\% \text{ số điểm}): 𝑚 = 0$
- **Subtask** $\#3$ $(30\% \text{ số điểm}): 𝑘 = 1$
- **Subtask** $\#4$ $(45\% \text{ số điểm}):$ Không có ràng buộc gì thêm

## Ví dụ:
### Dữ liệu vào:
```
5 1 3
4 1
3 5
5 2
```

### Dữ liệu ra:
```
2 5 3 1 4
```

### Dữ liệu vào:
```
5 4 3
4 1
3 5
5 2
```

### Dữ liệu ra:
```
4 5 1 2 3
```

### Dữ liệu vào:
```
5 10 3
4 1
3 5
5 2
```

### Dữ liệu ra:
```
5 4 2 1 3
```

### Dữ liệu vào:
```
5 11 3
4 1
3 5
5 2
```

### Dữ liệu ra:
```
poor professor
```

### Dữ liệu vào:
```
5 1 3
1 2
2 3
3 1
```

### Dữ liệu ra:
```
poor professor
```
### Giải thích:
- Trong bốn ví dụ đầu tiên, có $10$ cách chọn thứ tự ăn $5$ miếng chocolate. Đây là các hoán vị $(𝑝_1, 𝑝_2, 𝑝_3, 𝑝_4, 𝑝_5)$ của các số $(1, 2, 3, 4, 5)$ thoả mãn đồng thời $𝑝_4 < 𝑝_1, 𝑝_3 < 𝑝_5, 𝑝_5 < 𝑝_2$. Các thứ tự hợp lệ (sắp xếp theo thứ tự từ điển tăng dần) là: $(2, 5, 3, 1, 4), (3, 5, 1, 2, 4), (3, 5, 2, 1, 4), (4, 5, 1, 2, 3), (4, 5, 1, 3, 2), (4, 5, 2, 1, 3), (5, 3, 1, 4, 2), (5, 4, 1, 2, 3), (5, 4, 1, 3, 2), (5, 4, 2, 1, 3)$
- Trong ví dụ cuối cùng, không có thứ tự ăn $5$ miếng chocolate $(𝑝_1, 𝑝_2, 𝑝_3, 𝑝_4, 𝑝_5)$ nào thoả mãn đồng thời $𝑝_1 < 𝑝_2, 𝑝_2 < 𝑝_3$ và $𝑝_3 < 𝑝_1$. Thám tử PVH chắc chắn đã đưa ra thông tin không chính xác trong trường hợp này!