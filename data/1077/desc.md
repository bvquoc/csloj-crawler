**<center>NGUỒN: PreVNOI Ⅸ (BẮC GIANG 2019)</center>**
<br>

Một dãy ngoặc đúng là một xâu ký tự được định nghĩa đệ quy như sau:

- Xâu rỗng (không có ký tự nào) là một dãy ngoặc đúng
- Nếu ~X~ là một dãy ngoặc đúng thì ~(X)~ cũng là một dãy ngoặc đúng, ở đây ~(X)~ là xâu tạo thành bằng cách chèn thêm ký tự ~'('~ vào đầu và ký tự ~')'~ vào cuối xâu ~X~
- Nếu ~Y~ và ~Z~ là hai dãy ngoặc đúng thì ~YZ~ cũng là một dãy ngoặc đúng, ở đây ~YZ~ là xâu tạo thành bằng cách nối xâu ~Z~ vào cuối xâu ~Y~

Những xâu ký tự không thể xây dựng được theo quy tắc trên không phải là dãy ngoặc đúng.

Với một xâu ký tự chỉ gồm các ký tự ~∈\{'(',')'\}~, ta gọi trọng số của xâu đó là số ký tự ít nhất cần chèn thêm vào xâu ở các vị trí hợp lý để ta thu được một dãy ngoặc đúng. Ví dụ trọng số của xâu **((()** cũng như xâu **())(()** đều là ~2~ vì chúng cần chèn thêm ít nhất ~2~ ký tự mới trở thành dãy ngoặc đúng. Dưới đây là một trong những phương án chèn: **((()** ~→~ **()()()**; **())(()** ~→~ **(())(())**.

Cho xâu ký tự ~S=S_1 S_2…S_n~ chỉ gồm các ký tự ~∈\{'(',')'\}~ (chú ý là các ký tự trong xâu đánh số từ ~1~ trở đi), người ta thực hiện tuần tự ~m~ lệnh (đánh số từ ~1~ tới ~m~) thuộc một trong ba loại:
- ~C\ i~: Đảo ký tự ~S_i~ từ ký tự ~'('~ thành ký tự ~')'~ và ngược lại ~(1≤i≤n)~
- ~Q\ i\ j~: Cho biết trọng số của xâu con gồm các ký tự liên tiếp ~S_i S_{i+1}…S_j\ (1≤i≤j≤n)~
- ~U\ k~: Phục hồi lại xâu ~S~ như tình trạng trước khi thực hiện lệnh thứ ~k~ (~k~ là một số nguyên dương nhỏ hơn hoặc bằng chỉ số lệnh hiện tại)

**Yêu cầu**: Hãy mô phỏng quá trình thực hiện lệnh và cho biết câu trả lời cho các lệnh ~Q~

## Dữ liệu vào:
- Dòng đầu chứa xâu ~S~ gồm không quá ~10^6~ ký tự ~∈\{'(',')'\}~
- Dòng thứ hai chứa số nguyên dương ~m≤10^6~ là số lệnh
- ~m~ dòng tiếp theo chứa thông tin về một lệnh theo mô tả trên.

## Dữ liệu ra:
- Với mỗi lệnh ~Q~, ghi ra một số nguyên duy nhất trên một dòng là câu trả lời cho lệnh đó.

## Ví dụ:
#### Dữ liệu vào:
```
((()))
10
C 1
Q 2 5
C 5
Q 1 6
U 3
C 4
Q 3 6
U 5
C 1
Q 1 5
```

#### Dữ liệu ra:
```
0
2
0
3
```

#### Giải thích:
- Xâu ~S~ sau mỗi lệnh
    - 1  )(()))
    - 2:  )(()))
    - 3:  )(()()
    - 4:  )(()()
    - 5:  )(()))
    - 6:  )((())
    - 7:  )((())
    - 8:  )(()()
    - 9:  ((()()
    - 10: ((()()

## Giới hạn:
- **Subtask** ~\#1~ (~20\%~ số điểm): ~n,m≤1000~
- **Subtask** ~\#2~ (~40\%~ số điểm): dữ liệu không có lệnh ~U~
- **Subtask** ~\#3~ (~40\%~ số điểm): không có ràng buộc bổ sung