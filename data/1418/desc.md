<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Cho một thùng nước và hai gáo nước có dung tích lần lượt là $𝐴$ và $𝐵$. Ban đầu thùng nước rỗng. Một người phải dùng hai gáo nước múc nước vào thùng với điều kiện khi múc vào hay múc ra đều phải đong đầy gáo. Hãy tìm cách dùng số lần múc nước ít nhất để có được lượng nước là $𝐶$ trong thùng.

## Dữ liệu vào:
- Dòng đầu chứa số $𝑘 ≤ 100$ là số test;
- $𝑘$ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương $𝐴, 𝐵, 𝐶 ≤ 10^9$ cách nhau bởi dấu cách tương ứng với một test.

## Dữ liệu ra:
- Ứng với mỗi test, ghi ra trên một dòng một số nguyên duy nhất là số lần múc theo phương án tìm được, nếu không thể thực hiện yêu cầu ghi ra số $-1$.

## Ví dụ:
### Dữ liệu vào:
```
2
15 24 3
100 27 8
```

### Dữ liệu ra:
```
5
5
```

### Giải thích:
- Test case $\#1:$ Dùng giáo $24$ múc vào $2$ lần và dùng gáo $15$ đổ ra $3$ lần;
- Test case $\#2:$ Dùng gáo $27$ múc vào $4$ lần và dùng gáo $100$ múc ra $1$ lần.