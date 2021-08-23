Cho một bảng số kích thước $N\times N$. Một ô số được gọi là đặc biệt nếu nó là giá trị lớn nhất trên đường chéo đi qua ô đó song song với đường chéo chính, đồng thời cũng là giá trị nhỏ nhất trên đường chéo đi qua ô đó song song với đường chéo phụ của bảng.

**Yêu cầu:** Hãy tính tổng tất cả các ô số đặc biệt.

## Dữ liệu vào:
- Dòng thứ nhất chứa số nguyên dương $N$ (có giá trị không quá $1000$);
- $N$ dòng tiếp theo, mỗi dòng chứa $N$ số nguyên (có giá trị tuyệt đối không quá $10^9$). Trong đó số thứ $j$ của dòng thứ $i$ thể hiện giá trị của ô có tọa độ $(i, j)$ trên bảng.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tổng giá trị của tất cả các ô số đặc biệt, hoặc ghi ra $0$ nếu không có ô số nào thỏa mãn.

## Ví dụ:
### Dữ liệu vào:
```
4
9 7 5 3
2 7 9 6
1 9 8 7
4 7 7 4
```

### Dữ liệu ra:
```
18
```

**Giải thích:** các số ở các ô $(1, 1), (1, 4), (2, 4)$ là các số đặc biệt.