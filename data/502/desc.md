Sau một thời gian sống với Cuội ở gốc đa trên cung trăng, chị Hằng Nga thấy buồn chán và muốn mở của hàng buôn dưa lê. Chị Hằng Nga bắt Cuội làm cho một cái biển quảng cáo cho cửa hàng của mình. Cuội chỉ kiếm được mảnh gỗ trước đây là hàng rào vậy gốc đa. Mảnh gỗ gồm $n$ thanh gỗ ghép lại, mỗi thanh có chiều ngang là $1$ đơn vị và chiều dài là $h_i$ đơn vị, các thanh được ghép song song sát nhau và bằng nhau ở một đầu (như hình sau)

<center><img src="/images/problems/502/SALEMON.jpg" width="250px" /></center>

Trên cung trăng không có thước đo các loại nên Cuội **chỉ có thể cưa tấm gỗ theo các đường là cạnh của các tấm gỗ**. Hằng Nga lại yêu cầu bờm làm cho mình cái biển hình vuông có diện tích càng lớn càng tốt. Em hãy giúp Cuội tính diện tích tối đa của cái biến có thể làm được từ miếng gỗ trên nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương n (là số thanh gỗ của mảnh gỗ);
- Dòng thứ hai chứa $n$ số nguyên dương $h_1, h_2, …, h_n$. Hai số liên tiếp cách nhau một dấu cách.

## Dữ liệu ra:
Một số nguyên dương duy nhất là diện tích của tấm biển lớn nhất có thể.

## Ví dụ:
### Dữ liệu vào:
```
7
5 2 4 3 3 1 4
```

### Dữ liệu ra:
```
9
```

### Giải thích:
- Phương án tối ưu được mô tả trong hình sau (ô màu xanh là biển làm được):
<center><img src="/images/problems/502/SALEMON2.jpg" width="250px" /></center>

## Giới hạn:
- $1 ≤ n ≤ 10^6; 1 ≤ h_i ≤ 10^9$.