**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 2</center>**

Cho một bảng kích thước $𝑚×𝑛$ được chia làm lưới ô vuông đơn vị ($𝑚$ hàng, $𝑛$ cột), mỗi ô của bảng chứa các chữ cái tiếng anh thường. Người ta muốn cắt bỏ đi một số hàng cuối bảng sao cho sau khi cắt, bảng không được có hai cột giống nhau. Hãy xác định số hàng tối đa có thể cắt bỏ.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $𝑚, 𝑛 ≤ 3000$;
- $𝑚$ dòng tiếp theo, mỗi dòng chứa $𝑛$ chữ cái liền nhau là các chữ trên một hàng.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số hàng tối đa có thể cắt bỏ. Nếu không tồn tại phương án cắt. Ghi ra $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
abba
cdec
aaab
pqrs
aaaa
```

#### Dữ liệu ra:
```
2
```