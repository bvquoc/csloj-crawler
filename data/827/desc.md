Trong tiết học về dãy số tại trường, thầy giáo của Tý cho cả lớp chơi một trò chơi như sau: Cho một dãy số A bao gồm $N$ số nguyên, yêu cầu hãy chia dãy số trên thành hai phần liên tiếp sao cho tổng các số ở phần bên trái bằng tổng các số ở phần bên phải. Với mỗi bước như vậy bạn được $1$ điểm còn nếu không thể chia được thì trò chơi sẽ kết thúc. Sau khi chia thành công bạn sẽ được chọn dãy số bên trái hoặc bên phải để tiếp tục cuộc chơi với các bước như trên cho đến khi trò chơi kết thúc.

Là một học sinh giỏi trong lớp, Tý muốn đạt được số điểm cao nhất có thể. Bạn hãy tính xem số điểm lớn nhất mà Tý có thể đạt được là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu tiên ghi một số nguyên $T\ (1\le T\le 10)$ là số lượng bộ dữ liệu. Mỗi bộ dữ liệu bao gồm hai dòng:
- Dòng đầu tiên ghi một số nguyên $N$ là số lượng phần tử của dãy $A$;
- Dòng thứ hai gồm $N$ phần tử của dãy $A$ được ghi cách nhau bởi dấu cách $(0 ≤ a_i ≤ 10^9)$.

## Dữ liệu ra:
- Với mỗi bộ dữ liệu in ra một số nguyên trên một dòng là kết quả của bộ dữ liệu đó.

### Ví dụ:
#### Dữ liệu vào:
```
3
3
3 3 3
4
2 2 2 2
7
4 1 0 1 1 0 1
```

#### Dữ liệu ra:
```
0
2
3
```

## Giới hạn:

- $30\%$ số bộ dữ liệu có $N≤ 200$;
- $30\%$ số bộ dữ liệu khác có $200 < N≤ 2500$;
- $40\%$ số bộ dữ liệu còn lại có $200< N≤ 20000$.