Trong cuộc thi chung kết thế giới LEAGUE LEGENDS $2017$, đội GAM của Việt Nam đã vào đến trận chung kết và đối đầu với một đội rất mạnh là Fnatic, tất nhiên GAM muốn đánh một trận quyết chiến với chiến thuật hợp lý nhất. Trong tay GAM có $n$ đại tướng, mỗi đại tướng có những ưu điểm riêng và GAM sắp xếp theo thứ tự từ $1$ đến $n$ để tiện cho việc điều binh của mình. Đại tướng thứ $i$ có sức mạnh là $s_i$. Theo một bí quyết được lưu truyền trong thế giới LEAGUE LEGENDS thì đội quân được chọn ra chiến đấu sẽ phát huy được sức mạnh tối đa nếu là những đại tướng có chỉ số liên tiếp nhau, hơn nữa, sức mạnh của đội quân sẽ bằng sức mạnh của đại tướng yếu nhất (trong các đại tướng được chọn) nhân với số đại tướng. GAM rất muốn thắng trận chung kết để đem vinh quang về cho giới Game thủ Việt Nam, em hãy giúp đội GAM tính toán sức mạnh tối đa của đội quân mà GAM có thể chọn.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$ (là số đại tướng trong tay GAM);
- Dòng thứ hai chứa $n$ số nguyên dương $s_1, s_2, …, s_n$. Hai số liên tiếp cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên dương duy nhất là sức mạnh tối đa của đội quân GAM chọn được.

## Ví dụ:
### Dữ liệu vào:
```
4
3 4 3 1
```

### Dữ liệu ra:
```
9
```

### Giải thích:
- GAM chọn các vị đại tướng số $1, 2, 3$ thì sức mạnh đạt được là $3×3 = 9$.

## Giới hạn:
- $1 ≤ n ≤ 10^6; 1 ≤ s_i ≤ 10^9$.