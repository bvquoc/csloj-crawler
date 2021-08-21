Phần lớn các học sinh tham gia đội tuyển thi học sinh giỏi môn Tin học thường chơi game rất giỏi. Trại hè Hùng Vương lần thứ X, lần đầu tiên môn Tin học được Ban Tổ chức quyết định đưa vào nội dung thi Olympic của Trại hè Hùng Vương. Trong kỳ thi lần này, các thí sinh phải thi trò chơi bắn đĩa bay. Với trò chơi này, trước khi vào vị trí bắn người chơi được Ban Tổ chức cho quan sát $N$ đĩa, trên mỗi đĩa ghi một số nguyên dương tương ứng với điểm có được nếu người chơi bắn trúng. Súng để bắn đĩa là loại súng thể thao có hai nòng, tại mỗi thời điểm có thể nạp được tối đa $2$ viên đạn, mỗi lần bóp cò chỉ bắn ra $1$ viên đạn, sau khi bắn $1$ viên đạn hoặc bắn hết $2$ viên đạn, người chơi có thể nạp lại đạn. Như vậy, khi hệ thống phóng đĩa hoạt động, người chơi chỉ bắn được tối đa hai đĩa gần nhau rồi phải thực hiện thao tác nạp đạn trước khi muốn bắn tiếp. Biết mỗi lần nạp đầy đạn thì sẽ có một đĩa đã bay qua tầm ngắm và người chơi không thể bắn được đĩa này.
Bạn là một người chơi, giả sử tỉ lệ bắn trúng đĩa của bạn là $100\%$. Hãy chọn một số đĩa để bắn sao cho tổng điểm thu được của bạn là lớn nhất.
<center><img src="/images/problems/254/GAME.png" width="250px" /></center>

**Yêu cầu:** Cho $N$ đĩa có ghi số điểm của đĩa tương ứng. Máy phóng đĩa sẽ phóng lần lượt từ đĩa thứ nhất đến đĩa thứ $N$. Hãy xác định tổng điểm lớn nhất mà người chơi có thể đạt được.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N\ (1\le N\le 10^6)$;
- Dòng thứ hai chứa $N$ số nguyên $a_i\ (1\le a_i\le 10^9)$. Các số cách nhau ít nhất một dấu cách, là số điểm ghi trên các đĩa.

## Dữ liệu ra:
- Một số nguyên là số điểm lớn nhất mà người chơi có thể đạt được.

## Ví dụ:
#### Dữ liệu vào:
```
4
9 3 5 4
```

#### Dữ liệu ra:
```
18
```