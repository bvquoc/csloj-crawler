<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Bạn là người được giao nhiệm vụ sao lưu giữ liệu cho $𝑛$ văn phòng của công ty. Các văn phòng nằm trên một đường thẳng số thực và được đánh số từ $1$ tới $𝑛$, văn phòng thứ $𝑖$ ở vị trí $𝑥_𝑖$, không có hai văn phòng nằm ở cùng một vị trí.

Bạn được phép nối cáp giữa hai văn phòng để dữ liệu của chúng được sao chép sang nhau. Bạn chỉ được phép dùng $𝑘$ cáp nối để nối đúng $𝑘$ cặp văn phòng và mỗi văn phòng chỉ được phép có tối đa một cáp nối với nó. (Tổng cộng phải có đúng $2𝑘$ văn phòng được sao lưu dữ liệu theo cách này, những văn phòng còn lại bạn sẽ phải tự mang đĩa đến để sao lưu).

Vấn đề là chi phí nối cáp khá đắt, bạn cần tìm cách nối sao cho tổng độ dài $𝑘$ cáp nối là ít nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑛, 𝑘\ (2 ≤ 𝑛 ≤ 10^5; 𝑘 ≤ 𝑛/2)$;
- Dòng thứ hai chứa $𝑛$ số nguyên không âm $𝑥_1, 𝑥_2, … , 𝑥_𝑛\ (𝑥_𝑖 ≤ 10^9)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tổng độ dài cáp nối theo phương án tìm được.

## Ví dụ:
### Dữ liệu vào:
```
5 2
1 3 4 6 12
```

### Dữ liệu ra:
```
4
```

### Giải thích:
- Phương án tối ưu là nối văn phòng $1$ với văn phòng $2$ bằng cáp độ dài $2$, nối văn phòng $3$ với văn phòng $4$ cũng bằng cáp độ dài $2$.