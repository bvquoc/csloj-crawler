**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Hôm nay Nobita đi chơi Bowling. Bowling (còn gọi là Bóng gỗ) là một trò chơi giải trí mà người chơi ném một quả bóng nặng làm đổ những chai gỗ (con ky - pin). Vốn là một cao thủ bắn súng, Nobita có thể phát huy tối đa sở trường bách phát bách trúng của mình trong môn này, tức là Nobita đã nhằm vào chai nào sẽ ném trúng chai đó. Tuy nhiên trò Bowling trong câu lạc bộ này có quy tắc chơi đặc biệt khiến Nobita lúng túng: Có $𝑛$ chai xếp hàng ngang trên một đường thẳng, hai chai liên tiếp cách nhau $1$ đơn vị độ dài. Các chai được đánh số từ $1$ tới $𝑛$ và chai thứ $𝑖$ có điểm là $𝑎_𝑖$. Khi Nobita ném vào chai thứ $𝑖$ tất cả các chai cách chai $𝑖$ không quá $𝑘$ đơn vị độ dài sẽ đều bị đổ (dĩ nhiên bao gồm cả chai $𝑖$). Một cách chính xác, khi Nobita ném vào chai thứ $𝑖$, tất cả các chai $𝑗$ mà $𝑗 ∈[𝑖 − 𝑘; 𝑖 + 𝑘]$ cũng sẽ đổ.

Nobita được ném $1$ lần và buộc phải nhằm vào một chai nào đó để ném. Điểm Nobita thu được bằng điểm lớn nhất trừ đi điểm nhỏ nhất trong các chai bị đổ.

**Yêu cầu:** Giúp Nobita tìm cách ném để thu được điểm lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑛, 𝑘 ≤ 10^6$;
- Dòng thứ hai chứa $𝑛$ số nguyên dương $𝑎_1, 𝑎_2, … , 𝑎_𝑛ư (∀𝑖: 𝑎_𝑖 ≤ 10^9)$. Các số trên một dòng của input file được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là điểm của Nobita có theo phương án tìm được.

### Ví dụ:
### Dữ liệu vào:
```
9 2
1 2 6 3 4 5 9 7 8
```

### Dữ liệu ra:
```
6
```

**Giải thích:** Nhằm vào chai thứ $5$ hoặc thứ $6$.