Tí và Tèo có một bộ bài đặc biệt. Bộ bài gồm $n$ lá bài và chỉ có hai màu xanh và đỏ, các quân bài được đánh số từ $1$ đến $n$ từ dưới lên. Hai người chơi một trò chơi luân phiên nhau bốc bài, mỗi người đến lượt mình được bốc tối thiểu là $1$, tối đa là $k$ lá bài từ trên xuống (số lá bài bốc mỗi lần không vượt quá số bài còn lại). Điểm mỗi người nhận được ở mỗi lần bốc là số lá bài đỏ bốc được, khi bốc hết bài, tổng số điểm của ai cao hơn sẽ là người chiến thắng. Hai người Tí và Tèo là những cao thủ chơi bài nên đã biết trước màu của những lá bài và luôn chọn cách bốc tối ưu nhất.

Cho biết số $k$, số lá bài $n$ và màu của các lá bài, em hãy tính xem với cỗ bài đó thì trong hai người chơi có ai là người chiến thắng không? Nếu có thì tổng số điểm của người thua cuộc đạt được là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $k$;
- Dòng thứ hai chứa một xâu độ dài $n$ chỉ có các ký tự `0` và `1`, ký tự thứ i là `0` nếu lá bài thứ $i$ màu đen, `1` nếu lá bài thứ $i$ màu đỏ.

## Dữ liệu ra:
- Nếu không ai là người thắng cuộc, in ra `NO`, ngược lại, in ra hai dòng:
- Dòng đầu là `YES`
- Dòng thứ hai là số điểm mà người thua cuộc đạt được.

## Ví dụ:
### Dữ liệu vào:
```
5 3
10110
```

### Dữ liệu ra:
```
YES
1
```

### Dữ liệu vào:
```
4 2
1111
```

### Dữ liệu ra:
```
NO
```

### Giải thích:
- Trong test $1$: Nếu người đi đầu bốc $3$ lá bài trên cùng (lá $5, 4$ và $3$) thì sẽ được $2$ điểm (ở lá $3$ và lá $4$), người đi sau bốc $2$ lá bài còn lại (lá $2$ và $1$) thì được $1$ điểm (ở lá $1$). Như vậy người đi trước đã thắng người đi sau. Người đi sau là người thua có thể có nhiều nhất là $1$ điểm.

## Giới hạn:
- $1 ≤ k ≤ N ≤ 10^6$.